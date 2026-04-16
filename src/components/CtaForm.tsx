import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

const PORTAL_ID = '245737220'
const FORM_GUID = 'PENDIENTE'

const rubros = ['Salud', 'Estética', 'Gastronomía', 'Educación', 'Otro']

type FormData = {
  firstname: string
  email: string
  phone: string
  company: string
  industry: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'


export default function CtaForm() {
  const [form, setForm] = useState<FormData>({
    firstname: '', email: '', phone: '', company: '', industry: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    const payload = {
      fields: [
        { name: 'firstname', value: form.firstname },
        { name: 'email', value: form.email },
        { name: 'phone', value: form.phone },
        { name: 'company', value: form.company },
        { name: 'industry', value: form.industry },
      ],
      context: { pageUri: window.location.href, pageName: 'kalma - Landing' },
    }
    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }
      )
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = (name: string) => ({
    width: '100%',
    fontFamily: 'var(--sans)',
    fontSize: '15px',
    padding: '14px 16px',
    borderRadius: '12px',
    border: '1.5px solid',
    borderColor: focused === name ? 'var(--ambar)' : 'rgba(255,255,255,0.25)',
    background: focused === name ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.08)',
    color: '#fff',
    outline: 'none',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box' as const,
  })

  return (
    <section
      id="demo"
      style={{
        background: 'var(--petroleo)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Blobs decorativos */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-120px', left: '-80px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(8,145,178,0.07) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-100px', right: '-60px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)',
        }} />
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div className="cta-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '80px',
          alignItems: 'center',
        }}>

          {/* Izquierda — propuesta de valor */}
          <div>
            <div style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '100px',
              padding: '6px 16px',
              marginBottom: '32px',
            }}>
              <span style={{ fontSize: '13px', color: 'var(--ambar)', fontWeight: 500 }}>
                Demo gratuita · Sin compromiso
              </span>
            </div>

            <h2 style={{ color: '#fff', marginBottom: '20px' }}>
              Tu agenda merece<br />estar en paz
            </h2>

            <p className="subtitle" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '48px' }}>
              Contanos sobre tu negocio y te mostramos cómo kalma puede simplificarte el día a día.
            </p>

            {/* Checks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Configuración en menos de 5 minutos',
                'Compatible con tu sistema actual',
                'Soporte en español por WhatsApp',
              ].map(item => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                }}>
                  <CheckCircle size={20} color="var(--ambar)" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <span style={{ color: '#fff', fontSize: '16px', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Derecha — formulario */}
          <div>
            {status === 'success' ? (
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '24px',
                padding: '56px 40px',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: 'rgba(8,145,178,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px',
                }}>
                  <CheckCircle size={32} color="var(--petroleo)" strokeWidth={1.5} />
                </div>
                <h3 style={{ color: '#fff', marginBottom: '12px' }}>¡Listo, te contactamos pronto!</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px' }}>
                  Revisá tu WhatsApp en las próximas horas.
                </p>
              </div>
            ) : (
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '40px',
                backdropFilter: 'blur(10px)',
              }}>
                <h3 style={{ color: '#fff', marginBottom: '8px', fontSize: '20px' }}>Pedí tu demo</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginBottom: '32px' }}>
                  Te respondemos en menos de 24 horas.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="cta-name-email" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <input
                      style={inputStyle('firstname')}
                      type="text" name="firstname" placeholder="Nombre"
                      required value={form.firstname} onChange={handleChange}
                      onFocus={() => setFocused('firstname')}
                      onBlur={() => setFocused(null)}
                    />
                    <input
                      style={inputStyle('email')}
                      type="email" name="email" placeholder="Email"
                      required value={form.email} onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  <input
                    style={inputStyle('phone')}
                    type="tel" name="phone" placeholder="WhatsApp"
                    required value={form.phone} onChange={handleChange}
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setFocused(null)}
                  />

                  <input
                    style={inputStyle('company')}
                    type="text" name="company" placeholder="Nombre del negocio"
                    required value={form.company} onChange={handleChange}
                    onFocus={() => setFocused('company')}
                    onBlur={() => setFocused(null)}
                  />

                  <select
                    style={{ ...inputStyle('industry'), cursor: 'pointer', appearance: 'none' }}
                    name="industry" required value={form.industry} onChange={handleChange}
                    onFocus={() => setFocused('industry')}
                    onBlur={() => setFocused(null)}
                  >
                    <option value="" style={{ background: 'var(--espresso)' }}>Rubro</option>
                    {rubros.map(r => (
                      <option key={r} value={r} style={{ background: 'var(--espresso)' }}>{r}</option>
                    ))}
                  </select>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{
                      marginTop: '8px',
                      width: '100%',
                      padding: '16px',
                      borderRadius: '12px',
                      border: 'none',
                      background: status === 'loading' ? 'rgba(251,191,36,0.5)' : 'var(--ambar)',
                      color: 'var(--espresso)',
                      fontFamily: 'var(--sans)',
                      fontWeight: 600,
                      fontSize: '16px',
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => { if (status !== 'loading') (e.currentTarget as HTMLElement).style.background = '#E5AB1E' }}
                    onMouseLeave={e => { if (status !== 'loading') (e.currentTarget as HTMLElement).style.background = 'var(--ambar)' }}
                  >
                    {status === 'loading' ? 'Enviando...' : 'Quiero mi demo →'}
                  </button>

                  {status === 'error' && (
                    <p style={{ color: '#f87171', fontSize: '13px', textAlign: 'center' }}>
                      Hubo un problema. Intentá de nuevo.
                    </p>
                  )}

                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', textAlign: 'center', lineHeight: '150%' }}>
                    Al enviar, aceptás que nos comuniquemos con vos para coordinar la demo.
                  </p>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .cta-grid {
            gap: 40px !important;
          }
          .cta-name-email {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
