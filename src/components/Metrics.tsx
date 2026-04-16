import { useEffect, useRef, useState } from 'react'

const metrics = [
  { value: 1000000, prefix: '+', suffix: '', display: '1.000.000', label: 'turnos gestionados' },
  { value: 80, prefix: '', suffix: '%', display: '80', label: 'de autogestión' },
  { value: 200000, prefix: '+', suffix: '', display: '200.000', label: 'chats mensuales' },
]

function formatNumber(n: number): string {
  return n.toLocaleString('es-AR').replace(/,/g, '.')
}

function AnimatedNumber({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const start = value * 0.85
          const increment = (value - start) / steps
          setCurrent(Math.round(start))
          let step = 0
          const timer = setInterval(() => {
            step++
            setCurrent(Math.min(Math.round(start + increment * step), value))
            if (step >= steps) clearInterval(timer)
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="metric-number">
      {prefix}{formatNumber(current)}{suffix}
    </span>
  )
}

export default function Metrics() {
  return (
    <section style={{ background: '#fff', paddingBlock: '0' }}>
      <div className="container">
        <div className="metrics-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}>
          {metrics.map((m, i) => (
            <div
              key={i}
              className="metric-cell"
              style={{
                padding: '52px 32px',
                borderRight: i < metrics.length - 1 ? '1px solid var(--border)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '10px',
              }}
            >
              <AnimatedNumber value={m.value} prefix={m.prefix} suffix={m.suffix} />
              <span style={{ fontSize: '15px', color: 'var(--text)', lineHeight: '140%' }}>
                {m.label}
              </span>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 640px) {
            .metrics-grid {
              grid-template-columns: 1fr !important;
            }
            .metric-cell {
              padding: 24px 24px !important;
              border-right: none !important;
              border-bottom: 1px solid var(--border);
            }
            .metric-cell:last-child {
              border-bottom: none;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
