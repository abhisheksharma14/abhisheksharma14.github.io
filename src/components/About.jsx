import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Software Engineer with 9+ years of experience specializing in full-stack 
              JavaScript development. Currently working as Software Engineer II at A.P. Moller Maersk 
              in Bangalore, where I develop full-stack Next.js applications for contract management systems.
            </p>
            <p>
              My journey in software development has taken me through various exciting roles, from being 
              a founding team member at startups to leading development initiatives at companies like 
              AirAsia Technologies and Hippo Innovations.
            </p>
            <p>
              I'm passionate about building scalable, performant web applications and have extensive 
              experience with modern JavaScript frameworks, React ecosystem, and full-stack development. 
              I thrive in both team environments and self-directed settings, and I'm always eager to 
              learn and master new technologies.
            </p>
            <div className="about-links">
              <a 
                href="/Abhishek_Sharma_Resume.pdf" 
                download="Abhishek_Sharma_Resume.pdf"
                className="social-link resume-link"
              >
                Download Resume
              </a>
              <a 
                href="https://in.linkedin.com/in/abhisheksharma94" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/abhisheksharma14" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
              <a 
                href="https://stackoverflow.com/users/2650209/abhishek-sharma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                Stack Overflow
              </a>
            </div>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <div className="profile-placeholder">AS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
