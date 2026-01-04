import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages & Frameworks',
      skills: [
        'JavaScript',
        'React.js',
        'Next.js',
        'Vite.js',
        'Vue.js',
        'React Native',
        'HTML5',
        'CSS3',
        'PHP',
        'Python',
        'Bash Scripting'
      ]
    },
    {
      category: 'Backend & Servers',
      skills: [
        'Node.js',
        'Express.js',
        'Apache',
        'Nginx',
        'Adonis.js'
      ]
    },
    {
      category: 'Frontend Libraries',
      skills: [
        'Material Design',
        'Twitter Bootstrap',
        'jQuery',
        'Jest',
        'Webpack',
        'npm',
        'yarn'
      ]
    },
    {
      category: 'Databases',
      skills: [
        'MongoDB',
        'MySQL'
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        'Git',
        'Agile Scrum',
        'SSH',
        'AWS',
        'Unix',
        'REST APIs',
        'Headless CMSs',
        '3rd Party Integrations'
      ]
    }
  ];

  const certifications = [
    { name: 'HTML5, Microsoft Certified Professionals', provider: 'Microsoft' },
    { name: 'Rational Application Development, Worklight', provider: 'IBM' },
    { name: 'MongoDB Administrator', provider: '10gen' },
    { name: 'MongoDB Database Designer', provider: '10gen' },
    { name: 'Introduction to Linux', provider: 'Linux Foundation' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Certifications</h2>
        
        <div className="skills-section">
          <h3 className="subsection-title">Technical Skills</h3>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h4 className="category-title">{category.category}</h4>
                <div className="skills-list">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-section">
          <h3 className="subsection-title">Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-provider">{cert.provider}</div>
                <div className="cert-name">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="education-section">
          <h3 className="subsection-title">Education</h3>
          <div className="education-card">
            <h4 className="degree">B. Tech. (CSE)</h4>
            <div className="university">Kurukshetra University, Kurukshetra</div>
            <div className="period">May 2011 - July 2015</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
