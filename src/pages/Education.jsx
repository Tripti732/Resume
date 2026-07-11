import { FiBook, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Education.css';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'University / College',
    duration: '2023 – Present',
    status: 'Pursuing',
    location: 'India',
    icon: '🎓',
    color: 'purple',
    description:
      'Currently pursuing Bachelor of Computer Applications (BCA), developing strong foundations in computer science, programming, databases, and software development. Building practical skills through coursework and projects.',
    subjects: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Python Programming',
      'Web Technologies',
      'Software Engineering',
      'Computer Networks',
      'Operating Systems',
      'Mathematics & Statistics',
    ],
    highlights: [
      'Actively applying theoretical knowledge through real-world internship',
      'Developing data analysis skills alongside formal education',
      'Participating in tech projects and practical assignments',
    ],
  },
  {
    degree: 'Class XII (Senior Secondary)',
    institution: 'CBSE / State Board',
    duration: 'Completed',
    status: 'Completed',
    location: 'India',
    icon: '📚',
    color: 'cyan',
    description:
      'Completed higher secondary education with focus on core academic subjects, building the foundational knowledge required for pursuing technical higher education.',
    subjects: [
      'Mathematics',
      'Computer Science',
      'Physics',
      'Chemistry',
      'English',
    ],
    highlights: [
      'Strong foundation in Mathematics and Computer Science',
      'Developed early interest in technology and programming',
    ],
  },
];

const certifications = [
  {
    title: 'Data Analyst Internship',
    issuer: 'Hartron',
    icon: '🏆',
    color: 'purple',
    desc: 'Practical data analysis training in a professional environment',
  },
  {
    title: 'Python for Data Analysis',
    issuer: 'Online Platform',
    icon: '🐍',
    color: 'cyan',
    desc: 'Python programming with pandas, NumPy, and visualization libraries',
  },
  {
    title: 'SQL Fundamentals',
    issuer: 'Online Platform',
    icon: '🗄️',
    color: 'pink',
    desc: 'Database design, querying, and data manipulation with SQL',
  },
  {
    title: 'Excel for Data Analysis',
    issuer: 'Online Platform',
    icon: '📊',
    color: 'purple',
    desc: 'Advanced Excel techniques for data analysis and visualization',
  },
];

export default function Education() {
  return (
    <section className="section edu-section">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-badge"><FiBook size={12} /> Education</div>
          <h1 className="section-title">Academic Journey</h1>
          <div className="divider"></div>
          <p className="section-subtitle">
            Building knowledge, skills, and expertise one step at a time
          </p>
        </div>

        {/* Education Cards */}
        <div className="edu-timeline">
          {education.map((edu, i) => (
            <div key={i} className="edu-item">
              <div className="edu-indicator">
                <div className="edu-icon-circle">{edu.icon}</div>
                {i < education.length - 1 && <div className="edu-line"></div>}
              </div>
              <div className="edu-card card">
                {/* Header */}
                <div className="edu-header">
                  <div className="edu-main">
                    <div className="edu-title-row">
                      <h2 className="edu-degree">{edu.degree}</h2>
                      {edu.status === 'Pursuing' ? (
                        <span className="pursuing-badge">
                          <span className="pursuing-dot"></span>
                          Pursuing
                        </span>
                      ) : (
                        <span className="done-badge">Completed</span>
                      )}
                    </div>
                    <h3 className="edu-institution">{edu.institution}</h3>
                    <div className="edu-meta">
                      <span className="edu-meta-item">
                        <FiCalendar size={13} /> {edu.duration}
                      </span>
                      <span className="edu-meta-item">
                        <FiMapPin size={13} /> {edu.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="edu-desc">{edu.description}</p>

                {/* Subjects */}
                <div className="edu-subjects">
                  <h4 className="edu-sub-title">Key Subjects</h4>
                  <div className="subjects-tags">
                    {edu.subjects.map((sub, j) => (
                      <span key={j} className={`tag ${j % 3 === 0 ? 'tag-purple' : j % 3 === 1 ? 'tag-cyan' : 'tag-pink'}`}>
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="edu-highlights">
                  <h4 className="edu-sub-title">Highlights</h4>
                  <ul className="highlights-list">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="highlight-item">
                        <span className="highlight-bullet">✦</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="certs-section">
          <div className="section-header" style={{ marginBottom: '32px' }}>
            <div className="section-badge"><FiAward size={12} /> Certifications</div>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Certifications & Training</h2>
          </div>
          <div className="certs-grid">
            {certifications.map((cert, i) => (
              <div key={i} className="cert-card card">
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-info">
                  <h4 className="cert-title">{cert.title}</h4>
                  <span className={`tag tag-${cert.color} cert-issuer`}>{cert.issuer}</span>
                  <p className="cert-desc">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
