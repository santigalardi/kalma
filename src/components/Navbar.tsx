import { useEffect, useState } from 'react'
import kalmaHorizontalHead from '../assets/kalma-horizontal-head.png'

const navLinks = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Beneficios', href: '#beneficios' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    let lastY = window.scrollY
    const onScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 20)
      if (currentY > lastY && currentY > 80) {
        setHidden(true)
        setMenuOpen(false)
      } else {
        setHidden(false)
      }
      lastY = currentY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled || menuOpen ? 'rgba(253,248,240,0.97)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          borderBottom: scrolled || menuOpen ? '1px solid var(--border)' : '1px solid transparent',
          opacity: visible ? 1 : 0,
          transform: !visible ? 'translateY(-8px)' : (hidden && window.innerWidth <= 768) ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'opacity 0.5s ease, transform 0.35s ease, background 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div className="container flex items-center justify-between" style={{ paddingBlock: '2px' }}>
          <a href="#" onClick={closeMenu}>
            <img src={kalmaHorizontalHead} alt="kalma" style={{ height: '76px', width: 'auto', display: 'block' }} />
          </a>

          {/* Desktop nav */}
          <nav className="flex items-center" style={{ gap: '8px' }}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: 'var(--espresso)',
                  textDecoration: 'none',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(8,145,178,0.08)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#demo"
              className="btn btn-accent"
              style={{ padding: '10px 24px', fontSize: '15px', marginLeft: '8px' }}
            >
              Quiero mi demo
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '8px',
              color: 'var(--espresso)',
            }}
            className="mobile-menu-btn"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className="mobile-menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            padding: menuOpen ? '12px 0 20px' : '0',
            maxHeight: menuOpen ? '300px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease, padding 0.3s ease',
            borderTop: menuOpen ? '1px solid var(--border)' : 'none',
          }}
        >
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'var(--espresso)',
                  textDecoration: 'none',
                  padding: '12px 8px',
                  borderRadius: '10px',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(8,145,178,0.08)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={closeMenu}
              className="btn btn-accent"
              style={{ marginTop: '8px', width: '100%', fontSize: '16px' }}
            >
              Quiero mi demo
            </a>
          </div>
        </div>
      </header>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
          nav.flex { display: none !important; }
          .mobile-menu { display: flex !important; }
        }
      `}</style>
    </>
  )
}
