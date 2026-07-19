import { FiCode, FiStar } from 'react-icons/fi';
import {
  SiPython, SiMysql, SiLibreofficecalc, SiGrafana,
  SiDatabricks, SiPandas, SiNumpy, SiJupyter,
  SiGithub, SiGit, SiHtml5, SiCss,
} from 'react-icons/si';
import './Skills.css';

const skillCategories = [
  {
    category: 'Programming & Scripting',
    icon: '💻',
    color: 'purple',
    skills: [
      // { name: 'Python', icon: <SiPython />, level: 20, color: '#3776AB' },
      { name: 'SQL', icon: <SiMysql />, level: 30, color: '#4479A1' },
      { name: 'HTML', icon: <SiHtml5 />, level: 60, color: '#E34F26' },
      { name: 'CSS', icon: <SiCss />, level: 30, color: '#1572B6' },
    ],
  },
  {
    category: 'Data Analysis & Libraries',
    icon: '📊',
    color: 'cyan',
    skills: [
      // { name: 'Pandas', icon: <SiPandas />, level: 23, color: '#150458' },
      // { name: 'NumPy', icon: <SiNumpy />, level: 34, color: '#013243' },
      // { name: 'Jupyter', icon: <SiJupyter />, level: 25, color: '#F37626' },
      { name: 'MS Excel', icon: <SiLibreofficecalc />, level: 80, color: '#217346' },
    ],
  },
  {
    category: 'Visualization & BI Tools',
    icon: '📈',
    color: 'pink',
    skills: [
      { name: 'Tableau', icon: <SiGrafana />, level: 65, color: '#E97627' },
      { name: 'Power BI', icon: <SiDatabricks />, level: 60, color: '#F2C811' },
    ],
  },
  {
    category: 'Tools & Version Control',
    icon: '🛠️',
    color: 'purple',
    skills: [
      { name: 'Git', icon: <SiGit />, level: 65, color: '#F05032' },
      { name: 'GitHub', icon: <SiGithub />, level: 70, color: '#ffffff' },
    ],
  },
];

const softSkills = [
  { name: 'Analytical Thinking', level: 90 },
  { name: 'Problem Solving', level: 85 },
  { name: 'Data Storytelling', level: 80 },
  { name: 'Attention to Detail', level: 88 },
  { name: 'Communication', level: 78 },
  { name: 'Team Collaboration', level: 82 },
];

export default function Skills() {
  return (
    <section className="section skills-section">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-badge"><FiCode size={12} /> Skills</div>
          <h1 className="section-title">My Technical Arsenal</h1>
          <div className="divider"></div>
          <p className="section-subtitle">
            A curated set of tools and technologies I use to bring data to life
          </p>
        </div>

        {/* Tech Skills */}
        <div className="skills-categories">
          {skillCategories.map((cat, ci) => (
            <div key={ci} className="skill-category card">
              <div className="cat-header">
                <span className="cat-icon">{cat.icon}</span>
                <div>
                  <h3 className="cat-title">{cat.category}</h3>
                  <span className={`tag tag-${cat.color}`}>{cat.skills.length} skills</span>
                </div>
              </div>
              <div className="skills-list">
                {cat.skills.map((skill, si) => (
                  <div key={si} className="skill-item">
                    <div className="skill-label">
                      <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, var(--primary), var(--secondary))`,
                          animationDelay: `${si * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="soft-skills-section">
          <h2 className="soft-skills-title">Soft Skills</h2>
          <div className="soft-skills-grid">
            {softSkills.map((skill, i) => (
              <div key={i} className="soft-skill-card card">
                <div className="soft-skill-header">
                  <span className="soft-skill-name">{skill.name}</span>
                  <span className="soft-skill-percent">{skill.level}%</span>
                </div>
                <div className="soft-bar">
                  <div
                    className="soft-bar-fill"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${i * 0.15}s`,
                    }}
                  ></div>
                </div>
                <div className="soft-stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <FiStar
                      key={j}
                      size={12}
                      fill={j < Math.round(skill.level / 20) ? 'var(--primary-light)' : 'transparent'}
                      color={j < Math.round(skill.level / 20) ? 'var(--primary-light)' : 'var(--text-muted)'}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Mosaic */}
        <div className="tools-mosaic">
          <h2 className="tools-mosaic-title">Tools I Work With</h2>
          <div className="tools-cloud">
            {[
              // { icon: <SiPython />, name: 'Python', color: '#3776AB' },
              { icon: <SiMysql />, name: 'MySQL', color: '#4479A1' },
              { icon: <SiLibreofficecalc />, name: 'Excel', color: '#217346' },
              { icon: <SiGrafana />, name: 'Tableau', color: '#E97627' },
              { icon: <SiDatabricks />, name: 'Power BI', color: '#F2C811' },
              // { icon: <SiPandas />, name: 'Pandas', color: '#8B5CF6' },
              // { icon: <SiNumpy />, name: 'NumPy', color: '#06B6D4' },
              // { icon: <SiJupyter />, name: 'Jupyter', color: '#F37626' },
              { icon: <SiGit />, name: 'Git', color: '#F05032' },
              { icon: <SiGithub />, name: 'GitHub', color: '#ffffff' },
            ].map((tool, i) => (
              <div key={i} className="tool-bubble" style={{ '--tool-color': tool.color }}>
                <span className="tool-bubble-icon">{tool.icon}</span>
                <span className="tool-bubble-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
