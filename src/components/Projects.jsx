import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'aLex-ModCon',
      company: 'A.P. Moller Maersk',
      description: 'Working on the Contract Management system and micro frontend integrations. Automating the whole manual contracting workflow with advanced in-house CMS developed to manage clauses, assets, templates etc.',
      highlights: [
        'Leading integrations with other services and respective teams',
        'Worked on revamping and migrating the whole application to newer and better platforms',
        'Micro frontend architecture implementation'
      ],
      tech: ['Next.js', 'React', 'Micro Frontend', 'CMS']
    },
    {
      title: 'AirAsia Rewards',
      company: 'Airasia Technologies',
      description: 'Working on the Airasia loyalty rewards module embedded in the Airasia superapp. This module provides an interface for existing customers to redeem loyalty points, buy vouchers, gift cards, etc.',
      highlights: [
        'Leading the hybrid app module development',
        'Managing interaction and integration with other services',
        'Embedded module in AirAsia SuperApp'
      ],
      tech: ['React Native', 'Mobile', 'Integration APIs']
    },
    {
      title: 'BigXchange',
      company: 'Airasia Technologies',
      description: 'Customer-facing mobile-first web application developed with React.js. Provides an interface for end users to convert their loyalty points from other platforms to AirAsia Big Points and vice versa.',
      highlights: [
        'Leading the front-end development of the project',
        'Managing interaction and integration with other services',
        'Mobile-first responsive design'
      ],
      tech: ['React.js', 'Mobile-First', 'REST APIs'],
      link: null
    },
    {
      title: 'StoreHippo',
      company: 'Hippo Innovations',
      description: 'Led the backend development for the e-commerce platform. Managed sprints, task allotments, requirement analysis alongside development of new features.',
      highlights: [
        'Backend architecture and development',
        'Sprint management and requirement analysis',
        'E-commerce platform features'
      ],
      tech: ['Node.js', 'MongoDB', 'E-commerce'],
      link: 'https://www.storehippo.com/'
    },
    {
      title: 'Shipkaro',
      company: 'Hippo Innovations',
      description: 'Led the backend development for the logistics platform built on top of storehippo. Logistics aggregator platform providing advanced features such as tracking, scheduling, delivery reports, invoice reconciliations.',
      highlights: [
        '3rd Party logistics integrations (Bluedart, USPS, DHL, Delhivery)',
        'Platform development and maintenance',
        'Bug fixes and automation'
      ],
      tech: ['Node.js', 'Logistics APIs', 'Integration'],
      link: 'https://www.shipkaro.com/'
    },
    {
      title: 'Typito',
      company: 'Typito Technologies',
      description: 'Worked as full stack javascript developer responsible for customer-facing interface design and enhancements. Day-to-day tasks involved platform enhancements and customer-reported bug fixes.',
      highlights: [
        'Video editing platform enhancements',
        'Customer-facing interface development',
        'Full stack JavaScript development'
      ],
      tech: ['JavaScript', 'Full Stack', 'Video Platform'],
      link: 'https://typito.com/'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-company">{project.company}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              <div className="project-footer">
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
