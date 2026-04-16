import { useState } from 'react'
import { Bot, Bell, XCircle, RefreshCw } from 'lucide-react'

const capabilities = [
  {
    id: 0,
    icon: Bot,
    title: 'Reserva automática',
    tag: '01',
    desc: 'Tu cliente escribe por WhatsApp y kalma le ofrece los horarios disponibles. Elige, confirma, listo. Sin que vos hagas nada.',
    detail: 'Disponible las 24 hs, los 7 días. Nunca más perdés un turno por no contestar a tiempo.',
    visual: {
      label: 'Nueva reserva',
      lines: [
        { text: 'Sofía M. reservó para el jueves 15:00 hs', type: 'success' },
        { text: 'Juan P. reservó para el viernes 10:30 hs', type: 'success' },
        { text: 'María G. reservó para el lunes 09:00 hs', type: 'success' },
      ]
    }
  },
  {
    id: 1,
    icon: Bell,
    title: 'Recordatorios inteligentes',
    tag: '02',
    desc: 'El día anterior, kalma le avisa al cliente y le da la opción de confirmar o cambiar su turno. Sin que vos hagas nada.',
    detail: 'Los recordatorios reducen las ausencias hasta un 60%. Menos turnos vacíos, más facturación.',
    visual: {
      label: 'Recordatorio enviado',
      lines: [
        { text: 'Recordatorio → Sofía M. · Confirmó ✓', type: 'success' },
        { text: 'Recordatorio → Carlos R. · Reagendó', type: 'warning' },
        { text: 'Recordatorio → Ana L. · Confirmó ✓', type: 'success' },
      ]
    }
  },
  {
    id: 2,
    icon: XCircle,
    title: 'Cancelación sin drama',
    tag: '03',
    desc: 'Si alguien cancela, kalma libera el espacio y puede ofrecérselo automáticamente a otro cliente de la lista de espera.',
    detail: 'El hueco no queda vacío. El siguiente en lista lo ocupa en minutos, sin que intervengas.',
    visual: {
      label: 'Espacio reasignado',
      lines: [
        { text: 'Pedro V. canceló · Espacio liberado', type: 'warning' },
        { text: 'kalma notificó lista de espera · 3 clientes', type: 'info' },
        { text: 'Valentina S. tomó el turno ✓', type: 'success' },
      ]
    }
  },
  {
    id: 3,
    icon: RefreshCw,
    title: 'Reagendamiento fluido',
    tag: '04',
    desc: 'El cliente cambia de horario directamente desde el chat. Sin llamadas, sin idas y vueltas, sin interrupciones.',
    detail: 'Todo queda registrado y actualizado en tiempo real en tu sistema de turnos.',
    visual: {
      label: 'Turno modificado',
      lines: [
        { text: 'Lucía M. quiere cambiar su turno', type: 'info' },
        { text: 'kalma ofreció 3 opciones disponibles', type: 'info' },
        { text: 'Nuevo turno: miércoles 11:00 hs ✓', type: 'success' },
      ]
    }
  },
]

const typeColors: Record<string, string> = {
  success: 'var(--petroleo)',
  warning: 'var(--ambar)',
  info: '#94a3b8',
}

const typeBg: Record<string, string> = {
  success: 'rgba(8,145,178,0.08)',
  warning: 'rgba(251,191,36,0.1)',
  info: 'rgba(148,163,184,0.08)',
}

export default function Solution() {
  const [active, setActive] = useState(0)
  const cap = capabilities[active]
  const Icon = cap.icon

  const prev = () => setActive(a => (a - 1 + capabilities.length) % capabilities.length)
  const next = () => setActive(a => (a + 1) % capabilities.length)

  return (
    <section style={{ background: '#fff' }}>
      <div className="container">

        {/* Header */}
        <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto 72px' }}>
          <h2 style={{ marginBottom: '20px' }}>
            Kalma se encarga de todo.{' '}
            <span style={{ color: 'var(--petroleo)' }}>Vos, de lo que disfrutás.</span>
          </h2>
          <p className="subtitle">
            Desde que un cliente pide un turno hasta el recordatorio del día anterior,
            todo pasa automáticamente.
          </p>
        </div>

        {/* Layout interactivo */}
        <div className="solution-layout flex gap-8" style={{ flexWrap: 'wrap', alignItems: 'stretch' }}>

          {/* Tabs izquierda */}
          <div className="solution-tabs-wrapper">
          <div className="solution-tabs" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {capabilities.map((c) => {
              const CIcon = c.icon
              const isActive = c.id === active
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px 24px',
                    borderRadius: '16px',
                    border: isActive ? '1.5px solid var(--border-accent)' : '1.5px solid transparent',
                    background: isActive ? 'rgba(8,145,178,0.05)' : 'transparent',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(8,145,178,0.03)'
                  }}
                  onMouseLeave={e => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent'
                  }}
                >
                  {/* Número + línea */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                    <span style={{
                      fontFamily: 'var(--heading)',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      color: isActive ? 'var(--petroleo)' : 'var(--text)',
                      opacity: isActive ? 1 : 0.4,
                      transition: 'all 0.2s ease',
                    }}>
                      {c.tag}
                    </span>
                  </div>

                  <div style={{
                    width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0,
                    background: isActive ? 'rgba(8,145,178,0.12)' : 'rgba(8,145,178,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s ease',
                  }}>
                    <CIcon size={18} color={isActive ? 'var(--petroleo)' : '#94a3b8'} strokeWidth={1.5} />
                  </div>

                  <div>
                    <div style={{
                      fontFamily: 'var(--sans)',
                      fontWeight: 600,
                      fontSize: '15px',
                      color: isActive ? 'var(--espresso)' : 'var(--text)',
                      marginBottom: '3px',
                      transition: 'color 0.2s ease',
                    }}>
                      {c.title}
                    </div>
                    {isActive && (
                      <div style={{ fontSize: '13px', color: 'var(--petroleo)', fontWeight: 500 }}>
                        Ver detalle →
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          </div>

          {/* Panel derecha */}
          <div className="solution-panel" style={{
            flex: '1 1 420px',
            background: 'var(--marfil)',
            borderRadius: '24px',
            padding: '48px',
            border: '1px solid var(--border)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '380px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            {/* Número decorativo de fondo */}
            <span style={{
              position: 'absolute',
              top: '-20px',
              right: '24px',
              fontFamily: 'var(--heading)',
              fontSize: '160px',
              fontWeight: 300,
              color: 'var(--petroleo)',
              opacity: 0.05,
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
            }}>
              {cap.tag}
            </span>

            {/* Contenido */}
            <div style={{ position: 'relative' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '56px', height: '56px', borderRadius: '16px',
                background: 'rgba(8,145,178,0.1)',
                marginBottom: '24px',
              }}>
                <Icon size={26} color="var(--petroleo)" strokeWidth={1.5} />
              </div>

              <h3 style={{ fontSize: '24px', marginBottom: '12px', color: 'var(--espresso)' }}>
                {cap.title}
              </h3>
              <p style={{ color: 'var(--text)', lineHeight: '165%', marginBottom: '8px' }}>
                {cap.desc}
              </p>
              <p style={{ color: 'var(--petroleo)', fontSize: '14px', fontWeight: 500 }}>
                {cap.detail}
              </p>
            </div>

            {/* Visual / log de actividad */}
            <div style={{
              marginTop: '32px',
              background: '#fff',
              borderRadius: '14px',
              border: '1px solid var(--border)',
              overflow: 'hidden',
            }}>
              <div style={{
                padding: '10px 16px',
                borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--espresso)', letterSpacing: '0.3px' }}>
                  {cap.visual.label}
                </span>
              </div>
              {cap.visual.lines.map((line, i) => (
                <div key={i} style={{
                  padding: '10px 16px',
                  display: 'flex', alignItems: 'center', gap: '10px',
                  borderBottom: i < cap.visual.lines.length - 1 ? '1px solid var(--border)' : 'none',
                  background: typeBg[line.type],
                }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: typeColors[line.type], flexShrink: 0,
                  }} />
                  <span style={{ fontSize: '12.5px', color: 'var(--espresso)', lineHeight: '140%' }}>
                    {line.text}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Mobile nav — dots + flechas */}
          <div className="solution-mobile-nav" style={{ display: 'none', width: '100%', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '4px' }}>
            <button onClick={prev} aria-label="Anterior" style={{ background: 'none', border: '1.5px solid var(--border)', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text)', flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {capabilities.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Ir a ${i + 1}`} style={{ width: active === i ? '20px' : '8px', height: '8px', borderRadius: '100px', background: active === i ? 'var(--petroleo)' : 'var(--border)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s ease' }} />
              ))}
            </div>
            <button onClick={next} aria-label="Siguiente" style={{ background: 'none', border: '1.5px solid var(--border)', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text)', flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

        </div>
      </div>
      <style>{`
          .solution-tabs-wrapper {
            flex: 0 0 340px;
            position: relative;
          }

        @media (max-width: 768px) {
          .solution-tabs-wrapper {
            display: none !important;
          }
          .solution-mobile-nav {
            display: flex !important;
          }
          .solution-panel {
            flex: 0 0 100% !important;
            padding: 28px 24px !important;
            min-height: unset !important;
          }
        }

      `}</style>
    </section>
  )
}
