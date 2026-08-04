import { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X, FileText, ChevronDown } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import cvPtUrl from '../../imports/Gabriela_RodriguesCurriculo.pdf?url';
import cvEnUrl from '../../imports/Curr_culoENGABRIELA.pdf?url';

function CvDropdown() {
  const { tr, lang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          background: 'none',
          border: '1.5px solid #E5E5E2',
          borderRadius: 6,
          padding: '7px 14px',
          fontSize: 13,
          fontWeight: 600,
          cursor: 'pointer',
          color: '#171717',
          transition: 'border-color 0.2s, background 0.2s',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = '#171717';
          (e.currentTarget as HTMLButtonElement).style.background = '#f5f5f5';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = '#E5E5E2';
          (e.currentTarget as HTMLButtonElement).style.background = 'none';
        }}
      >
        <FileText size={14} />
        {tr.cvLabel}
        <ChevronDown size={12} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>

      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 8px)',
          right: 0,
          background: '#fff',
          border: '1px solid #E5E5E2',
          borderRadius: 10,
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          minWidth: 160,
          zIndex: 200,
          overflow: 'hidden',
        }}>
          {[
            { label: `🇧🇷 ${tr.cvPt}`, href: cvPtUrl },
            { label: `🇺🇸 ${tr.cvEn}`, href: cvEnUrl },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '12px 16px',
                fontSize: 13,
                fontWeight: 500,
                color: '#171717',
                textDecoration: 'none',
                transition: 'background 0.15s',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#F8F8F6')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      background: '#F0F0EE',
      borderRadius: 6,
      padding: 2,
      gap: 2,
    }}>
      {(['pt', 'en'] as const).map(l => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            background: lang === l ? '#171717' : 'transparent',
            color: lang === l ? '#fff' : '#666',
            border: 'none',
            borderRadius: 4,
            padding: '5px 10px',
            fontSize: 12,
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: '0.04em',
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { tr } = useLang();

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
    { label: tr.navWork, href: '/#trabalho' },
    { label: tr.navProcess, href: '/#processo' },
    { label: tr.navAbout, href: '/#sobre' },
    { label: tr.navContact, href: '/#contato' },
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
            <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }} className="hidden-mobile">
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

              <LangToggle />
              <CvDropdown />

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
                {tr.navCta}
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

            {/* Mobile lang toggle + CV */}
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 16, paddingTop: 8 }}>
              <LangToggle />
              <a
                href={cvPtUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#171717',
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: 'none',
                  padding: '6px 12px',
                  border: '1.5px solid #E5E5E2',
                  borderRadius: 6,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                <FileText size={13} /> CV PT
              </a>
              <a
                href={cvEnUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#171717',
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: 'none',
                  padding: '6px 12px',
                  border: '1.5px solid #E5E5E2',
                  borderRadius: 6,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                <FileText size={13} /> CV EN
              </a>
            </div>

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
              {tr.navCta}
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
              <div style={{ color: '#999', fontSize: 14 }}>{tr.footerRole}</div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center' }}>
              {tr.footerNavLabels.map((label, i) => (
                <button
                  key={label}
                  onClick={() => handleNavClick(tr.footerNavHrefs[i])}
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
                  {label}
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
              {/* CV links in footer */}
              <a
                href={cvPtUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#999', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: 5 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#999')}
              >
                <FileText size={13} /> CV PT
              </a>
              <a
                href={cvEnUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#999', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: 5 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#999')}
              >
                <FileText size={13} /> CV EN
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
