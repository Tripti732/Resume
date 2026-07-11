import { FiUser, FiHeart, FiTarget, FiGithub, FiMail } from 'react-icons/fi';
import './About.css';

const traits = [
  { icon: '📊', title: 'Data-Driven', desc: 'I believe in making decisions backed by data and solid analysis.' },
  { icon: '🎯', title: 'Goal-Oriented', desc: 'Always focused on delivering meaningful results and outcomes.' },
  { icon: '🚀', title: 'Fast Learner', desc: 'Quickly adapt to new technologies and frameworks with enthusiasm.' },
  { icon: '🤝', title: 'Team Player', desc: 'Collaborate effectively in diverse teams to achieve shared goals.' },
];

const interests = [
  '📈 Data Analytics', '🤖 Machine Learning', '📊 Data Visualization',
  '💻 Python Programming', '🗄️ Databases & SQL', '📱 Tech Innovation',
  '📚 Continuous Learning', '🔍 Problem Solving',
];

export default function About() {
  return (
    <section className="section about-section">
      <div className="orb orb-1"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-badge"><FiUser size={12} /> About Me</div>
          <h1 className="section-title">Know Who I Am</h1>
          <div className="divider"></div>
          <p className="section-subtitle">
            A passionate data enthusiast turning numbers into narratives
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Profile Card */}
          <div className="profile-card-wrapper">
            <div className="profile-card card">
              <div className="profile-img-box">
                <img src="/tripti.png" alt="Tripti" className="about-img" />
                <div className="profile-img-ring"></div>
              </div>
              <div className="profile-info">
                <h2 className="profile-name">Tripti</h2>
                <p className="profile-role">Data Analyst Intern</p>
                <div className="profile-details">
                  <div className="detail-row">
                    <FiMail size={14} />
                    <a href="mailto:ttripti732@gmail.com">ttripti732@gmail.com</a>
                  </div>
                  <div className="detail-row">
                    <FiGithub size={14} />
                    <a href="https://github.com/Tripti732" target="_blank" rel="noopener noreferrer">
                      github.com/Tripti732
                    </a>
                  </div>
                  <div className="detail-row">
                    <FiTarget size={14} />
                    <span>BCA - Pursuing</span>
                  </div>
                  <div className="detail-row">
                    <FiHeart size={14} />
                    <span>Data &amp; Analytics</span>
                  </div>
                </div>

                <div className="about-actions">
                  <a href="mailto:ttripti732@gmail.com" className="btn btn-primary">
                    <FiMail /> Get In Touch
                  </a>
                  <a
                    href="https://github.com/Tripti732"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <FiGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: About Content */}
          <div className="about-content">
            <div className="about-text">
              <h2>Hello! I'm <span className="highlight">Tripti</span> 👋</h2>
              <p>
                I'm a passionate and driven BCA student with a deep interest in the world of 
                data analysis. Currently gaining valuable real-world experience as a 
                <strong> Data Analyst Intern at Hartron</strong>, where I work on transforming 
                raw data into actionable insights using tools like Python, SQL, and Excel.
              </p>
              <p>
                My journey in tech began with a curiosity about how data shapes decisions 
                in the real world. I've been honing my skills in data analysis, visualization, 
                and storytelling — believing that every dataset has a story waiting to be told.
              </p>
              <p>
                When I'm not exploring datasets, you'll find me learning new analytical 
                techniques, working on projects, or exploring the latest in tech innovations.
              </p>
            </div>

            {/* Traits */}
            <div className="traits-grid">
              {traits.map((t, i) => (
                <div key={i} className="trait-card card">
                  <span className="trait-icon">{t.icon}</span>
                  <h4 className="trait-title">{t.title}</h4>
                  <p className="trait-desc">{t.desc}</p>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div className="interests-box">
              <h3 className="interests-title">My Interests</h3>
              <div className="interests-tags">
                {interests.map((item, i) => (
                  <span key={i} className={`tag ${i % 3 === 0 ? 'tag-purple' : i % 3 === 1 ? 'tag-cyan' : 'tag-pink'}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
