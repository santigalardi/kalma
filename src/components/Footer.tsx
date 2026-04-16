import kalmaHorizontalHead from '../assets/kalma-horizontal-head.png'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--espresso)' }}>

      {/* Cuerpo principal */}
      <div className="container" style={{ paddingBlock: '56px' }}>
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto auto',
          gap: '64px',
          alignItems: 'start',
        }}>

          {/* Logo + tagline */}
          <div>
            <img src={kalmaHorizontalHead} alt="kalma" style={{ height: '36px', width: 'auto', marginBottom: '16px' }} />
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '160%', maxWidth: '260px' }}>
              El asistente de turnos que trabaja por vos, 24/7, sin que toques el celular.
            </p>
          </div>

          {/* Producto */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Producto
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Cómo funciona', href: '#como-funciona' },
                { label: 'Beneficios', href: '#beneficios' },
                { label: 'Pedí tu demo', href: '#demo' },
              ].map(({ label, href }) => (
                <a key={href} href={href} style={{
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: '15px',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Contacto
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.15s ease' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.551 4.103 1.513 5.834L.057 23.179a.75.75 0 00.912.912l5.345-1.456A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.98-1.37l-.356-.214-3.702 1.009 1.009-3.702-.214-.356A9.713 9.713 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:hola@kalma.com.ar"
                style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.15s ease' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                hola@kalma.com.ar
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Barra inferior */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="container" style={{ paddingBlock: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', margin: 0 }}>
            © 2026 PrestoBots. Todos los derechos reservados.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  )
}
