import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiCode, FiBook, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home', icon: <FiHome /> },
  { path: '/about', label: 'About', icon: <FiUser /> },
  { path: '/experience', label: 'Experience', icon: <FiBriefcase /> },
  { path: '/skills', label: 'Skills', icon: <FiCode /> },
  { path: '/education', label: 'Education', icon: <FiBook /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Tripti</span>
          <span className="logo-bracket">/&gt;</span>
        </Link>

        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                <span className="nav-icon">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <a href="mailto:ttripti732@gmail.com" className="btn btn-primary nav-cta">
          Hire Me
        </a>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            <span className="nav-icon">{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
        <a href="mailto:ttripti732@gmail.com" className="btn btn-primary mobile-cta">
          Hire Me
        </a>
      </div>
    </nav>
  );
}
