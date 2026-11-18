import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const [ref, inView] = useScrollReveal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer__line" />
      <div ref={ref} className={`container footer__inner sr sr--up ${inView ? 'in-view' : ''}`}>
        <div className="footer__brand">
          <span className="footer__logo">
            <span className="footer__logo-v">D</span>anush<span className="footer__logo-dot">.</span>
          </span>
          <p className="footer__tagline">
            Kotapati Venkata Danush · AI Engineer · Backend Developer · Multi-Agent Systems
          </p>
        </div>

        <div className="footer__links">
          {[
            { label: 'GitHub',   href: 'https://github.com/OnlyVenkatadanush' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kotapati-venkata-danush/' },
            { label: 'LeetCode', href: 'https://leetcode.com/u/venkatadanush/' },
            { label: 'Email',    href: 'mailto:kotapativenkatadanush@gmail.com' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="footer__link"
              id={`footer-link-${label.toLowerCase()}`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {year} Kotapati Venkata Danush. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="footer__scroll-top" title="Scroll to top" aria-label="Scroll to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
