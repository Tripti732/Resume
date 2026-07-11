import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiExternalLink } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    role: 'Data Analyst Intern',
    company: 'Hartron',
    type: 'Internship',
    duration: '2024 – Present',
    location: 'Haryana, India',
    status: 'Current',
    color: 'purple',
    logo: '🏢',
    description:
      'Working as a Data Analyst intern at Hartron (Haryana State Electronics Development Corporation), gaining hands-on experience in data analysis, visualization, and reporting.',
    responsibilities: [
      'Analyzing and processing large datasets using Python and Excel',
      'Creating insightful data visualizations and dashboards',
      'Performing data cleaning, transformation, and validation',
      'Generating detailed reports and presenting findings to the team',
      'Working with SQL databases to extract and manipulate data',
      'Collaborating with cross-functional teams on data-driven projects',
    ],
    skills: ['Python', 'Excel', 'SQL', 'Data Analysis', 'Visualization', 'Reporting'],
  },
];

export default function Experience() {
  return (
    <section className="section exp-section">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-badge"><FiBriefcase size={12} /> Experience</div>
          <h1 className="section-title">My Journey So Far</h1>
          <div className="divider"></div>
          <p className="section-subtitle">
            Real-world experience shaping my expertise in data analytics
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-line">
                <div className="timeline-dot"></div>
                <div className="timeline-connector"></div>
              </div>
              <div className="exp-card card">
                {/* Header */}
                <div className="exp-header">
                  <div className="exp-logo">{exp.logo}</div>
                  <div className="exp-meta">
                    <div className="exp-company-row">
                      <h2 className="exp-company">{exp.company}</h2>
                      {exp.status === 'Current' && (
                        <span className="current-badge">
                          <span className="current-dot"></span>
                          Currently Working
                        </span>
                      )}
                    </div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-info-row">
                      <span className="exp-info">
                        <FiCalendar size={13} /> {exp.duration}
                      </span>
                      <span className="exp-info">
                        <FiMapPin size={13} /> {exp.location}
                      </span>
                      <span className={`tag tag-${exp.color}`}>{exp.type}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="exp-description">{exp.description}</p>

                {/* Responsibilities */}
                <div className="exp-responsibilities">
                  <h4 className="resp-title">Key Responsibilities</h4>
                  <ul className="resp-list">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="resp-item">
                        <FiCheckCircle className="resp-icon" size={15} />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills used */}
                <div className="exp-skills">
                  <h4 className="skills-used-title">Technologies Used</h4>
                  <div className="skills-used-tags">
                    {exp.skills.map((s, j) => (
                      <span key={j} className={`tag ${j % 3 === 0 ? 'tag-purple' : j % 3 === 1 ? 'tag-cyan' : 'tag-pink'}`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Start Node */}
          <div className="timeline-start">
            <div className="timeline-start-icon">🚀</div>
            <span>The Journey Begins</span>
          </div>
        </div>

        {/* Impact Cards */}
        <div className="impact-section">
          <h2 className="impact-title">What I Bring to the Table</h2>
          <div className="impact-grid">
            {[
              { icon: '📊', title: 'Data Analysis', desc: 'Proficient in extracting insights from complex datasets using Python and SQL' },
              { icon: '📈', title: 'Visualization', desc: 'Creating compelling visual stories that make data easy to understand' },
              { icon: '🔍', title: 'Critical Thinking', desc: 'Analytical mindset to identify patterns and solve data problems' },
              { icon: '⚡', title: 'Fast Execution', desc: 'Delivering results efficiently while maintaining quality standards' },
            ].map((item, i) => (
              <div key={i} className="impact-card card">
                <span className="impact-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
