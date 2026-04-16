import { useState } from 'react'
import { PlugZap, Zap, Smile } from 'lucide-react'

const steps = [
  {
    n: '01',
    icon: PlugZap,
    title: 'Conectá tu agenda',
    desc: 'Vinculamos kalma con tu sistema de turnos en minutos. No necesitás conocimientos técnicos.',
    detail: 'Compatible con los sistemas más usados en Argentina. Nuestro equipo te acompaña en todo.',
    tag: 'Configuración',
  },
  {
    n: '02',
    icon: Zap,
    title: 'Kalma empieza a trabajar',
    desc: 'Desde el primer día, responde consultas, confirma turnos y envía recordatorios por WhatsApp. Automáticamente.',
    detail: 'Sin capacitación, sin manual. kalma aprende tu agenda y actúa por vos desde el día uno.',
    tag: 'Automatización',
  },
  {
    n: '03',
    icon: Smile,
    title: 'Vos disfrutás tu negocio',
    desc: 'Tu agenda ordenada, tus turnos confirmados, tu equipo con más tiempo. Así de simple.',
    detail: 'Más tiempo para lo que importa. Menos mensajes, más resultados.',
    tag: 'Resultado',
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section
      id="como-funciona"
      style={{
        background: 'var(--oceano)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Blobs decorativos */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(8,145,178,0.3) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', left: '-60px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)',
        }} />
      </div>

      <div className="container" style={{ position: 'relative' }}>

        {/* Header */}
        <div style={{ marginBottom: '72px', textAlign: 'center' }}>
          <h2 style={{ color: '#fff', margin: '0 auto 16px' }}>
            Tres pasos.<br />
            <span style={{ color: 'var(--ambar)' }}>Cero estrés.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: '165%', margin: '0 auto', maxWidth: '360px' }}>
            Empezás a automatizar tu agenda en minutos, sin complicaciones ni conocimientos técnicos.
          </p>
        </div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>

          {/* Línea conectora */}
          <div className="hiw-line" style={{
            position: 'absolute',
            left: '63px',
            top: '96px',
            bottom: 'calc(33.33% - 45px)',
            width: '2px',
            borderRadius: '2px',
            background: 'linear-gradient(to bottom, rgba(251,191,36,0.05) 0%, rgba(251,191,36,0.5) 30%, rgba(251,191,36,0.5) 70%, rgba(251,191,36,0.05) 100%)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {steps.map(({ n, icon: Icon, title, desc, detail, tag }, i) => {
              const isActive = active === i
              return (
                <div
                  key={n}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  className="hiw-step"
                  style={{
                    display: 'flex',
                    gap: '32px',
                    alignItems: 'flex-start',
                    padding: '32px',
                    borderRadius: '20px',
                    cursor: 'default',
                    transition: 'background 0.25s ease',
                    background: isActive ? 'rgba(255,255,255,0.06)' : 'transparent',
                    border: isActive ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
                  }}
                >
                  {/* Nodo */}
                  <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '64px', height: '64px', borderRadius: '50%',
                      background: isActive ? 'var(--ambar)' : 'rgba(251,191,36,0.15)',
                      border: '2px solid',
                      borderColor: isActive ? 'var(--ambar)' : 'rgba(251,191,36,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.25s ease',
                      boxShadow: isActive ? '0 0 24px rgba(251,191,36,0.3)' : 'none',
                    }}>
                      <Icon
                        size={24}
                        color={isActive ? 'var(--espresso)' : 'var(--ambar)'}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div style={{ flex: 1, paddingTop: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <span style={{
                        fontFamily: 'var(--heading)',
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '1.5px',
                        color: 'var(--ambar)',
                        opacity: 0.7,
                        textTransform: 'uppercase',
                      }}>
                        {tag}
                      </span>
                    </div>

                    <h3 style={{
                      color: '#fff',
                      marginBottom: '10px',
                      fontSize: '22px',
                    }}>
                      {title}
                    </h3>

                    <p style={{
                      color: 'rgba(255,255,255,0.85)',
                      lineHeight: '165%',
                      fontSize: '16px',
                      marginBottom: isActive ? '12px' : '0',
                      transition: 'margin 0.2s ease',
                    }}>
                      {desc}
                    </p>

                    {/* Detalle extra al activar */}
                    <div style={{
                      overflow: 'hidden',
                      maxHeight: isActive ? '120px' : '0',
                      opacity: isActive ? 1 : 0,
                      transition: 'max-height 0.3s ease, opacity 0.3s ease',
                    }}>
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(251,191,36,0.1)',
                        border: '1px solid rgba(251,191,36,0.2)',
                        borderRadius: '8px',
                        padding: '8px 14px',
                      }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--ambar)', flexShrink: 0 }} />
                        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: '140%' }}>
                          {detail}
                        </span>
                      </div>
                    </div>
                  </div>


                </div>
              )
            })}
          </div>
        </div>

        {/* CTA inferior */}
        <div className="text-center hiw-cta" style={{ marginTop: '64px' }}>
          <a href="#demo" className="btn btn-accent" style={{ padding: '16px 40px', fontSize: '16px' }}>
            Empezar ahora →
          </a>
        </div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .hiw-line {
            left: 47px !important;
          }
          .hiw-step {
            padding: 20px 16px !important;
            gap: 20px !important;
          }
.hiw-cta {
            margin-top: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
