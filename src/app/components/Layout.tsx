import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Trabalho', href: '/#trabalho' },
    { label: 'Processo', href: '/#processo' },
    { label: 'Sobre mim', href: '/#sobre' },
    { label: 'Contato', href: '/#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const id = href.replace('/#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (href.startsWith('/#')) {
      window.location.href = href;
    }
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: '#F8F8F6', color: '#171717' }}>
      {/* Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled ? 'rgba(248,248,246,0.95)' : '#F8F8F6',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #E5E5E2' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
            {/* Logo */}
            <Link to="/" style={{ textDecoration: 'none', color: '#171717' }}>
              <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em' }}>Gabriela Rodrigues</span>
            </Link>

            {/* Desktop Nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#666666',
                    fontSize: 14,
                    fontWeight: 500,
                    padding: 0,
                    transition: 'color 0.2s',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#171717')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#666666')}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('/#contato')}
                style={{
                  background: '#171717',
                  color: '#F8F8F6',
                  border: 'none',
                  borderRadius: 6,
                  padding: '8px 18px',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  letterSpacing: '0.01em',
                  transition: 'background 0.2s',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#6D5DF5')}
                onMouseLeave={e => (e.currentTarget.style.background = '#171717')}
              >
                Vamos conversar
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'none' }}
              className="show-mobile"
            >
              {menuOpen ? <X size={22} color="#171717" /> : <Menu size={22} color="#171717" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ backgroundColor: '#F8F8F6', borderTop: '1px solid #E5E5E2', padding: '16px 24px 24px' }}>
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  color: '#171717',
                  fontSize: 16,
                  fontWeight: 500,
                  padding: '12px 0',
                  cursor: 'pointer',
                  borderBottom: '1px solid #E5E5E2',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('/#contato')}
              style={{
                display: 'block',
                width: '100%',
                marginTop: 16,
                background: '#171717',
                color: '#F8F8F6',
                border: 'none',
                borderRadius: 6,
                padding: '12px 18px',
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Vamos conversar
            </button>
          </div>
        )}
      </header>

      {/* Main content */}
      <main style={{ paddingTop: 64 }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#171717', color: '#F8F8F6', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 32, marginBottom: 40 }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Gabriela Rodrigues</div>
              <div style={{ color: '#999', fontSize: 14 }}>Product Designer · Product Owner</div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
              {[
                { label: 'Projetos', href: '/#trabalho' },
                { label: 'Sobre mim', href: '/#sobre' },
                { label: 'Processo', href: '/#processo' },
                { label: 'Contato', href: '/#contato' },
              ].map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#999',
                    fontSize: 14,
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#999')}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://www.linkedin.com/in/gabriela-rodrigues-802a2a198/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#999', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#999')}
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #333', paddingTop: 24, color: '#666', fontSize: 13 }}>
            © 2026 Gabriela Rodrigues
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}
