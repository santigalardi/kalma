import KalmaIso from '../assets/kalma-iso.svg?react'

export default function Benefits() {
  return (
    <section id="beneficios" style={{ background: 'var(--marfil)' }}>
      <div className="container">

        {/* Header */}
        <div className="text-center" style={{ maxWidth: '560px', margin: '0 auto 64px' }}>
          <h2 style={{ marginBottom: '16px' }}>Menos estrés. Más turnos. Mejor negocio.</h2>
          <p className="subtitle">El impacto de tener kalma se nota desde la primera semana.</p>
        </div>

        {/* Bento grid */}
        <div className="benefits-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'auto auto',
          gap: '16px',
        }}>

          {/* Card grande — 24/7 */}
          <div className="card-247" style={{
            gridColumn: 'span 2',
            gridRow: 'span 1',
            background: 'var(--petroleo)',
            borderRadius: '24px',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '260px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div aria-hidden="true" style={{
              position: 'absolute', right: '-20px', bottom: '-30px',
              opacity: 0.07,
            }}>
              <KalmaIso style={{ width: '200px', height: '200px', fill: '#fff' }} />
            </div>
            <div style={{
              fontFamily: 'var(--heading)',
              fontSize: '72px',
              fontWeight: 300,
              color: '#fff',
              lineHeight: 1,
              letterSpacing: '-2px',
            }}>
              24/7
            </div>
            <div>
              <h3 style={{ color: '#fff', marginBottom: '8px', fontSize: '20px' }}>Autónomo de verdad</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '160%', fontSize: '15px' }}>
                Kalma no se toma descanso, no se olvida, no se confunde. Funciona mientras vos dormís.
              </p>
            </div>
          </div>

          {/* Card — Menos ausencias */}
          <div className="card-ausencias" style={{
            gridColumn: 'span 1',
            background: '#fff',
            borderRadius: '24px',
            padding: '36px 32px',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '260px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              fontFamily: 'var(--heading)',
              fontSize: '64px',
              fontWeight: 300,
              color: 'var(--petroleo)',
              lineHeight: 1,
              letterSpacing: '-2px',
              opacity: 0.15,
              position: 'absolute',
              top: '20px',
              right: '20px',
            }}>−60%</div>
            <div style={{
              width: '44px', height: '44px', borderRadius: '12px',
              background: 'rgba(8,145,178,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--petroleo)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                <polyline points="16 7 22 7 22 13"/>
              </svg>
            </div>
            <div>
              <h3 style={{ marginBottom: '8px', fontSize: '18px' }}>Menos ausencias</h3>
              <p style={{ color: 'var(--text)', lineHeight: '160%', fontSize: '14px' }}>
                Los recordatorios automáticos reducen las inasistencias. Menos turnos vacíos, más facturación.
              </p>
            </div>
          </div>

          {/* Card — Equipo */}
          <div className="card-equipo" style={{
            gridColumn: 'span 1',
            background: 'var(--espresso)',
            borderRadius: '24px',
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '260px',
          }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '12px',
              background: 'rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <h3 style={{ color: '#fff', marginBottom: '8px', fontSize: '18px' }}>Tu equipo rinde más</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '160%', fontSize: '14px' }}>
                Tu gente tiene más tiempo para lo que importa, no para responder WhatsApp.
              </p>
            </div>
          </div>

          {/* Card — Fácil */}
          <div className="card-facil" style={{
            gridColumn: 'span 2',
            background: 'var(--ambar)',
            borderRadius: '24px',
            padding: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            minHeight: '200px',
          }}>
            <div style={{
              fontFamily: 'var(--heading)',
              fontSize: '56px',
              fontWeight: 300,
              color: 'var(--espresso)',
              lineHeight: 1,
              letterSpacing: '-1.5px',
              flexShrink: 0,
            }}>
              Día 1
            </div>
            <div>
              <h3 style={{ color: 'var(--espresso)', marginBottom: '8px', fontSize: '20px' }}>Fácil desde el día uno</h3>
              <p style={{ color: 'rgba(28,25,23,0.75)', lineHeight: '160%', fontSize: '15px' }}>
                Sin instalaciones complicadas, sin capacitaciones largas. Si tu cliente usa WhatsApp, ya sabe usar kalma.
              </p>
            </div>
          </div>

          {/* Card — Agenda ordenada */}
          <div className="card-agenda" style={{
            gridColumn: 'span 2',
            background: '#fff',
            borderRadius: '24px',
            padding: '40px',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            minHeight: '200px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Mini agenda decorativa */}
            <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['09:00', '10:30', '12:00', '14:30'].map((t, i) => (
                <div key={t} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                }}>
                  <span style={{ fontSize: '12px', color: 'var(--text)', opacity: 0.5, width: '36px', fontFamily: 'var(--mono, monospace)' }}>{t}</span>
                  <div style={{
                    height: '10px',
                    width: i === 1 ? '80px' : i === 3 ? '64px' : '96px',
                    borderRadius: '4px',
                    background: i % 2 === 0 ? 'var(--petroleo)' : 'rgba(8,145,178,0.2)',
                    opacity: i === 1 ? 1 : 0.6,
                  }} />
                </div>
              ))}
            </div>
            <div>
              <h3 style={{ marginBottom: '8px', fontSize: '20px' }}>Tu agenda, siempre ordenada</h3>
              <p style={{ color: 'var(--text)', lineHeight: '160%', fontSize: '15px' }}>
                Cada turno en su lugar, cada cliente notificado, cada cambio registrado. Sin que toques nada.
              </p>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .benefits-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .card-247 { grid-column: span 2 !important; min-height: 200px !important; }
          .card-ausencias { grid-column: span 1 !important; min-height: 200px !important; }
          .card-equipo { grid-column: span 1 !important; min-height: 200px !important; }
          .card-facil {
            grid-column: span 2 !important;
            flex-direction: column !important;
            gap: 16px !important;
            min-height: unset !important;
          }
          .card-agenda {
            grid-column: span 2 !important;
            flex-direction: column !important;
            gap: 24px !important;
            min-height: unset !important;
          }
        }
        @media (max-width: 480px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
          }
          .card-247, .card-ausencias, .card-equipo, .card-facil, .card-agenda {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  )
}
