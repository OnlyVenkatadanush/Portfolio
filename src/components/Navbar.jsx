import { useState, useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Home',       href: '#home',       id: 'home' },
  { label: 'Overview',   href: '#about',      id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects',   href: '#projects',   id: 'projects' },
  { label: 'Patents',    href: '#patents',    id: 'patents' },
  { label: 'Academics',  href: '#education',  id: 'education' },
  { label: 'Contact',    href: '#contact',    id: 'contact' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState('home');

  const clickedRef = useRef(false);
  const timerRef   = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickedRef.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id) => {
    setActive(id);
    setMenuOpen(false);

    clickedRef.current = true;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      clickedRef.current = false;
    }, 800);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container">
        {/* Brand Logo */}
        <a
          href="#home"
          className="navbar__logo"
          onClick={() => handleLinkClick('home')}
        >
          <span className="navbar__logo-mark">D</span>
          <span className="navbar__logo-text">anush<span className="navbar__logo-dot">.</span></span>
        </a>

        {/* Links */}
        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ label, href, id }) => (
            <li key={id}>
              <a
                href={href}
                className={`navbar__link ${active === id ? 'active' : ''}`}
                onClick={() => handleLinkClick(id)}
                id={`nav-link-${id}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar__actions">
          <a
            href="/Kotapati_Venkata_Danush_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
            id="navbar-resume-btn"
          >
            <Download size={14} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
