import { useState, useEffect, useRef } from 'react'

const messages = [
  { id: 1, text: 'Hola! para cuando tienen turno?', time: '08:14', out: false },
  { id: 2, text: 'Confirmo turno del martes a las 10?', time: '08:31', out: false },
  { id: 3, text: 'Tuve un problema, lo puedo pasar?', time: '09:02', out: false },
  { id: 4, text: 'Sí, martes 10hs confirmado ✓', time: '09:15', out: true },
  { id: 5, text: 'Buenas! tienen lugar el jueves?', time: '09:38', out: false },
  { id: 6, text: 'No puedo ir mañana, cancelo', time: '10:04', out: false },
  { id: 7, text: 'Me podrían recordar mi turno?', time: '10:22', out: false },
  { id: 8, text: 'Estoy en el frente, llegué', time: '10:45', out: false },
  { id: 9, text: 'Perfecto, pasá! Ya te atendemos', time: '10:46', out: true },
  { id: 10, text: 'Para el miércoles tengo algo a las 3?', time: '11:03', out: false },
  { id: 11, text: 'Cuánto sale el turno doble?', time: '11:29', out: false },
  { id: 12, text: 'Reschedulé para el viernes please', time: '12:07', out: false },
]

const painStats = [
  { value: '2h', label: 'por día en mensajes', color: 'var(--petroleo)' },
  { value: '−40%', label: 'de productividad del equipo', color: '#E57C3A' },
  { value: '1 de 3', label: 'turnos con error o vacío', color: '#C94A4A' },
]

export default function Problem() {
  const [visibleCount, setVisibleCount] = useState(3)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    if (visibleCount >= messages.length) return
    const timer = setTimeout(() => setVisibleCount(c => c + 1), 500)
    return () => clearTimeout(timer)
  }, [isVisible, visibleCount])

  return (
    <section ref={sectionRef} style={{ background: 'var(--bg)' }}>
      <div className="container">

        {/* Header */}
        <div className="problem-header" style={{ maxWidth: '580px', marginBottom: '72px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(201,74,74,0.08)',
            border: '1px solid rgba(201,74,74,0.2)',
            borderRadius: '100px',
            padding: '6px 16px',
            marginBottom: '28px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C94A4A', display: 'inline-block' }} />
            <span style={{ fontSize: '13px', color: '#C94A4A', fontWeight: 500 }}>El problema</span>
          </div>
          <h2 style={{ marginBottom: '16px' }}>Tu día se va en<br />responder mensajes</h2>
          <p className="subtitle">
            Confirmás turnos a mano, el mismo mensaje veinte veces, y cuando alguien cancela el hueco se pierde. Así se va la mañana.
          </p>
        </div>

        {/* Main grid */}
        <div className="problem-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          alignItems: 'start',
        }}>

          {/* Left — WhatsApp chaos */}
          <div style={{
            background: '#fff',
            borderRadius: '24px',
            border: '1px solid var(--border)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow)',
          }}>
            {/* Chat header */}
            <div style={{
              background: '#075E54',
              padding: '16px 20px',
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px',
              }}>💼</div>
              <div>
                <p style={{ color: '#fff', fontSize: '15px', fontWeight: 600, margin: 0 }}>Mi Negocio</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', margin: 0 }}>en línea</p>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}>
                {[0,1,2].map(i => (
                  <div key={i} style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.4)',
                    animation: isVisible ? `pulse 1.2s ease-in-out ${i * 0.2}s infinite` : 'none',
                  }} />
                ))}
              </div>
            </div>

            {/* Messages */}
            <div style={{
              padding: '16px',
              background: '#ECE5DD',
              minHeight: '360px',
              maxHeight: '360px',
              overflowY: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              position: 'relative',
            }}>
              {messages.slice(0, visibleCount).map((msg, i) => (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    justifyContent: msg.out ? 'flex-end' : 'flex-start',
                    animation: i === visibleCount - 1 ? 'slideUp 0.3s ease' : 'none',
                  }}
                >
                  <div style={{
                    maxWidth: '75%',
                    background: msg.out ? '#DCF8C6' : '#fff',
                    borderRadius: msg.out ? '12px 4px 12px 12px' : '4px 12px 12px 12px',
                    padding: '8px 12px',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}>
                    <p style={{ fontSize: '13px', color: '#111', margin: 0, lineHeight: '145%' }}>{msg.text}</p>
                    <p style={{ fontSize: '11px', color: 'rgba(0,0,0,0.4)', margin: '2px 0 0', textAlign: 'right' }}>{msg.time}</p>
                  </div>
                </div>
              ))}

              {/* Unread badge */}
              {visibleCount > 6 && (
                <div style={{
                  position: 'sticky', bottom: 0,
                  display: 'flex', justifyContent: 'center',
                  pointerEvents: 'none',
                }}>
                  <div style={{
                    background: 'rgba(201,74,74,0.9)',
                    color: '#fff',
                    borderRadius: '100px',
                    padding: '4px 14px',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}>
                    +{visibleCount - 4} mensajes sin responder
                  </div>
                </div>
              )}
            </div>

            {/* Bottom bar */}
            <div style={{
              padding: '12px 16px',
              background: '#F0F0F0',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <div style={{
                flex: 1, background: '#fff', borderRadius: '20px',
                padding: '10px 16px', fontSize: '13px', color: '#999',
              }}>
                Respondiendo...
              </div>
            </div>
          </div>

          {/* Right — pain points stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Stats row */}
            <div className="stats-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
            }}>
              {painStats.map(({ value, label, color }) => (
                <div key={label} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '20px 16px',
                  border: '1px solid var(--border)',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: 'var(--heading)',
                    fontSize: '28px',
                    fontWeight: 300,
                    color,
                    letterSpacing: '-1px',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}>{value}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text)', lineHeight: '140%', opacity: 0.75 }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Pain point 1 */}
            <div style={{
              background: 'var(--espresso)',
              borderRadius: '20px',
              padding: '32px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px',
                fontFamily: 'var(--heading)',
                fontSize: '120px',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.04)',
                lineHeight: 1,
                letterSpacing: '-4px',
                pointerEvents: 'none',
                userSelect: 'none',
              }}>01</div>
              <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '18px' }}>
                Agenda manual que se rompe
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px', lineHeight: '165%', margin: 0 }}>
                Dos celulares, planillas de Excel y post-its. Cuando algo falla, el caos se multiplica.
              </p>
              <div style={{
                marginTop: '20px',
                display: 'flex', gap: '8px', flexWrap: 'wrap',
              }}>
                {['Doble turno', 'Datos perdidos', 'Horarios confusos'].map(tag => (
                  <span key={tag} style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '100px',
                    padding: '4px 12px',
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.55)',
                  }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Pain point 2 */}
            <div className="pain-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}>
              <div style={{
                background: 'rgba(229,124,58,0.08)',
                border: '1px solid rgba(229,124,58,0.2)',
                borderRadius: '20px',
                padding: '28px 24px',
              }}>
                <div style={{
                  fontFamily: 'var(--heading)',
                  fontSize: '40px',
                  fontWeight: 300,
                  color: '#E57C3A',
                  lineHeight: 1,
                  letterSpacing: '-1.5px',
                  marginBottom: '12px',
                }}>$$$</div>
                <h3 style={{ marginBottom: '8px', fontSize: '16px', color: 'var(--text-h)' }}>Turnos que se evaporan</h3>
                <p style={{ color: 'var(--text)', fontSize: '13px', lineHeight: '155%', margin: 0, opacity: 0.8 }}>
                  Cancelaciones sin aviso. Nadie llena el hueco. Facturación que no llega.
                </p>
              </div>

              <div style={{
                background: 'rgba(201,74,74,0.06)',
                border: '1px solid rgba(201,74,74,0.15)',
                borderRadius: '20px',
                padding: '28px 24px',
              }}>
                <div style={{
                  fontFamily: 'var(--heading)',
                  fontSize: '40px',
                  fontWeight: 300,
                  color: '#C94A4A',
                  lineHeight: 1,
                  letterSpacing: '-1.5px',
                  marginBottom: '12px',
                }}>
                  {/* Burned people icon */}
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C94A4A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 style={{ marginBottom: '8px', fontSize: '16px', color: 'var(--text-h)' }}>Equipo agotado</h3>
                <p style={{ color: 'var(--text)', fontSize: '13px', lineHeight: '155%', margin: 0, opacity: 0.8 }}>
                  Horas perdidas en confirmaciones que una IA podría hacer en segundos.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @media (max-width: 768px) {
          .problem-header {
            margin-bottom: 40px !important;
          }
          .problem-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .pain-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          .pain-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
