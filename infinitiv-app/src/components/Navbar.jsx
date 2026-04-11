import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Expeditions', href: '#expeditions' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, '#home')}>
          <img src="/logo.png" alt="InfinitiV Logo" className="logo-icon" />
          <img src="/logo-text.png" alt="InfinitiV Adventure" className="logo-text" />
        </a>

        <div className="nav-links">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? 'active' : ''}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => handleNavClick(e, '#contact')}
            style={{ display: 'inline-flex' }}
          >
            Plan Your Trip
          </a>
          <button
            className={`menu-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            className={activeSection === item.href.slice(1) ? 'active' : ''}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-primary"
          onClick={(e) => handleNavClick(e, '#contact')}
          style={{ textAlign: 'center', marginTop: '16px' }}
        >
          Plan Your Trip
        </a>
      </div>
    </nav>
  );
}
