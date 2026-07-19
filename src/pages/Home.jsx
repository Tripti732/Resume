import { Link } from 'react-router-dom';
import { FiGithub, FiMail, FiArrowRight, FiMapPin } from 'react-icons/fi';
import { SiPython, SiLibreofficecalc, SiGrafana, SiMysql } from 'react-icons/si';
import './Home.css';

const quickSkills = [
  // { icon: <SiPython />, label: 'Python' },
  { icon: <SiMysql />, label: 'SQL' },
  { icon: <SiLibreofficecalc />, label: 'Excel' },
  { icon: <SiGrafana />, label: 'Tableau' },
];

export default function Home() {
  return (
    <section className="home-section">
      {/* Background elements */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="home-grid-pattern"></div>

      <div className="container">
        <div className="hero-layout">
          {/* LEFT: Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Available for Internships & Projects</span>
            </div>

            <div className="hero-greeting">
              <span className="wave-emoji">👋</span>
              <span>Hello, I&apos;m</span>
            </div>

            <h1 className="hero-name">
              Tripti
              <span className="name-cursor">|</span>
            </h1>

            <div className="hero-title-wrapper">
              <span className="hero-title-prefix">Aspiring</span>
              <div className="hero-titles">
                <span className="hero-title">Data Analyst</span>
                <span className="hero-title">BCA Student</span>
                <span className="hero-title">Tech Enthusiast</span>
              </div>
            </div>

            <p className="hero-bio">
              Passionate about transforming raw data into meaningful insights. 
              Currently pursuing <strong>BCA</strong> and gaining hands-on experience 
              as a <strong>Data Analyst Intern at Hartron</strong>. I love turning 
              complex datasets into actionable stories.
            </p>

            <div className="hero-location">
              <FiMapPin size={14} />
              <span>India</span>
            </div>

            <div className="hero-quick-skills">
              {quickSkills.map((s, i) => (
                <div key={i} className="quick-skill">
                  <span className="quick-skill-icon">{s.icon}</span>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <Link to="/experience" className="btn btn-primary">
                View My Work <FiArrowRight />
              </Link>
              <a
                href="https://github.com/Tripti732"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FiGithub /> GitHub
              </a>
              <a href="mailto:ttripti732@gmail.com" className="btn btn-outline">
                <FiMail /> Contact
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">1+</span>
                <span className="stat-label">Year Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">Tools Mastered</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">Learning Spirit</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="hero-image-side">
            <div className="image-frame-outer">
              <div className="image-orbit orbit-1">
                <div className="orbit-dot"></div>
              </div>
              <div className="image-orbit orbit-2">
                <div className="orbit-dot"></div>
              </div>
              <div className="image-frame">
                <div className="image-glow"></div>
                <img
                  src="/image.jpeg"
                  alt="Tripti - Data Analyst"
                  className="hero-img"
                />
                <div className="image-overlay"></div>
              </div>
              {/* Floating Cards */}
              <div className="float-card float-card-1">
                <span className="float-icon">📊</span>
                <div>
                  <span className="float-title">Data Analyst</span>
                  <span className="float-sub">Hartron Intern</span>
                </div>
              </div>
              <div className="float-card float-card-2">
                <span className="float-icon">🎓</span>
                <div>
                  <span className="float-title">BCA Student</span>
                  <span className="float-sub">Pursuing</span>
                </div>
              </div>
              <div className="float-card float-card-3">
                <span className="float-icon">💻</span>
                <div>
                  <span className="float-title">Excel &amp; SQL</span>
                  <span className="float-sub">Core Skills</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div> */}
    </section>
  );
}
