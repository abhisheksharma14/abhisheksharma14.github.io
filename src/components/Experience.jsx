import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer II',
      company: 'A.P. Moller Maersk',
      location: 'Bangalore',
      period: 'February 2022 - Present',
      responsibilities: [
        'Developed full stack next.js application for Maersk contracts management systems',
        'Leading 3rd party integrations and ensuring application reliability',
        'Working closely with stakeholders to gather requirements and feasibility assessments'
      ]
    },
    {
      title: 'Software Engineer II',
      company: 'Airasia Technologies',
      location: 'Bangalore',
      period: 'January 2020 - February 2022',
      responsibilities: [
        'Lead BigRewards Hybrid app development initiative using React Native',
        'Lead BigXchange frontend development initiative as Subject Matter Expert',
        'Reviewed project specifications and designed technology solutions that met or exceeded performance expectations',
        'Managed full-cycle design tasks, handling all phases from conception to completion'
      ]
    },
    {
      title: 'Sr. Software Developer',
      company: 'Hippo Innovations',
      location: 'Gurugram',
      period: 'May 2018 - January 2020',
      responsibilities: [
        'Orchestrated efficient large-scale software deployments, including testing features and correcting code',
        'Monitored ongoing operation of assigned programs and responded to problems by diagnosing and correcting logic and coding errors',
        'Trained new developers and programmers on company standards for design and review',
        'Created procedures for system monitoring, recovery, backup and optimization'
      ]
    },
    {
      title: 'JavaScript Developer',
      company: 'Typito Technologies',
      location: 'Bangalore',
      period: 'September 2017 - May 2018',
      responsibilities: [
        'Enhancing the video editing platform typito.com with advanced editing features',
        'Added features on the basis of customer requests analysis',
        'Gathering data for analytics based on user events and Email marketing strategies'
      ]
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Urbanwand',
      location: 'Gurugram',
      period: 'September 2015 - August 2017',
      responsibilities: [
        'Member of the founding team and led the core product development',
        'Responsible for Web apps, database management, deployments, and APIs as well as UI',
        'Delivered performance-driven and user-centric websites that met all business requirements'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="job-title">{exp.title}</h3>
                <div className="company-info">
                  <span className="company">{exp.company}</span>
                  <span className="location">{exp.location}</span>
                </div>
                <p className="period">{exp.period}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
