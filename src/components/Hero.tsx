import { useEffect, useState } from 'react'
import isoFill from '../assets/kalma-iso-fill.png'

const chatMessages = [
  { from: 'client', text: 'Hola, quería reservar un turno para el martes', time: '10:21' },
  { from: 'kalma', text: 'Perfecto. El martes tengo disponibles:\n• 10:00 hs\n• 14:30 hs\n• 17:00 hs\n¿Cuál te queda mejor?', time: '10:21' },
  { from: 'client', text: '14:30 está genial', time: '10:22' },
  { from: 'kalma', text: '¡Listo! Turno confirmado para el martes a las 14:30 hs. Te mando un recordatorio el día anterior 📅', time: '10:22' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative flex items-center hero-section"
      style={{
        background: 'var(--marfil)',
        paddingTop: '120px',
        paddingBottom: '96px',
        minHeight: '100svh',
        overflow: 'hidden',
      }}
    >
      {/* Fondos decorativos */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div style={{
          position: 'absolute', top: '-15%', right: '-8%',
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(8,145,178,0.07) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 70%)',
        }} />
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div className="flex items-center gap-16" style={{ flexWrap: 'wrap' }}>

          {/* Texto */}
          <div
            style={{
              flex: '1 1 480px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <div
              className="inline-flex items-center gap-2"
              style={{
                background: 'rgba(8,145,178,0.08)',
                border: '1px solid var(--border-accent)',
                borderRadius: '100px',
                padding: '6px 16px',
                marginBottom: '32px',
                maxWidth: '100%',
              }}
            >
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: 'var(--petroleo)', display: 'inline-block',
                flexShrink: 0,
                boxShadow: '0 0 0 3px rgba(8,145,178,0.2)',
              }} />
              <span style={{ fontSize: '14px', color: 'var(--petroleo)', fontWeight: 500 }}>
                Automatización de turnos por WhatsApp
              </span>
            </div>

            <h1 style={{ marginBottom: '24px' }}>
              Tu agenda en{' '}
              <span style={{ color: 'var(--petroleo)' }}>piloto automático</span>
            </h1>

            <p className="subtitle" style={{ marginBottom: '48px', maxWidth: '500px' }}>
              Kalma gestiona tus turnos por WhatsApp de principio a fin.
              Reserva, confirma, recuerda, cancela y reagenda.
              Sin que toques el celular.
            </p>

            <div className="flex items-center gap-4" style={{ flexWrap: 'wrap', marginBottom: '32px' }}>
              <a href="#demo" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '17px' }}>
                Quiero ver cómo funciona →
              </a>
            </div>

            <div className="flex items-center gap-6" style={{ flexWrap: 'wrap', rowGap: '10px' }}>
              {['Sin compromiso', 'Configuración en minutos', 'Soporte en español'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill="rgba(8,145,178,0.1)" />
                    <path d="M5 8l2 2 4-4" stroke="var(--petroleo)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: '14px', color: 'var(--text)', opacity: 0.75 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup WhatsApp */}
          <div
            className="hero-mockup"
            style={{
              flex: '1 1 320px',
              display: 'flex',
              justifyContent: 'center',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}
          >
            <div style={{
              width: '340px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 32px 64px rgba(28,25,23,0.15), 0 8px 24px rgba(28,25,23,0.08)',
              border: '1px solid rgba(0,0,0,0.06)',
            }}>
              {/* Header WhatsApp */}
              <div style={{
                background: '#075E54',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: '#FDF8F0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  overflow: 'hidden',
                }}>
                  <img src={isoFill} alt="" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: '15px', lineHeight: 1.3 }}>kalma</div>
                  <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '12px' }}>en línea</div>
                </div>
              </div>

              {/* Chat */}
              <div style={{
                background: '#ECE5DD',
                padding: '14px 12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}>
                <div style={{ textAlign: 'center', marginBottom: '4px' }}>
                  <span style={{
                    background: 'rgba(255,255,255,0.6)',
                    borderRadius: '6px',
                    padding: '3px 10px',
                    fontSize: '11px',
                    color: '#777',
                  }}>Hoy</span>
                </div>

                {chatMessages.map((msg, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: msg.from === 'client' ? 'flex-end' : 'flex-start',
                  }}>
                    <div style={{
                      background: msg.from === 'client' ? '#DCF8C6' : '#fff',
                      borderRadius: msg.from === 'client' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                      padding: '8px 10px 6px',
                      maxWidth: '230px',
                      fontSize: '13px',
                      lineHeight: '150%',
                      color: '#111',
                      boxShadow: '0 1px 1px rgba(0,0,0,0.06)',
                      whiteSpace: 'pre-line',
                    }}>
                      {msg.text}
                      <div style={{ textAlign: 'right', marginTop: '3px' }}>
                        <span style={{ fontSize: '10.5px', color: '#999' }}>{msg.time}</span>
                        {msg.from === 'client' && <span style={{ color: '#4FC3F7', fontSize: '11px', marginLeft: '3px' }}>✓✓</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div style={{
                background: '#F6F6F6',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <div style={{
                  flex: 1,
                  background: '#fff',
                  borderRadius: '24px',
                  padding: '9px 14px',
                  fontSize: '13px',
                  color: '#bbb',
                  border: '1px solid #e8e8e8',
                }}>
                  Mensaje
                </div>
                <div style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  background: '#25D366',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M2 21l21-9L2 3v7l15 2-15 2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 128px !important;
            padding-bottom: 64px !important;
            min-height: unset !important;
          }
          .hero-mockup {
            width: 100%;
          }
          .hero-mockup > div {
            width: 100% !important;
            max-width: 360px;
          }
        }
      `}</style>
    </section>
  )
}
