import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Abhishek Sharma</h1>
        <h2 className="hero-tagline">I build things for the web.</h2>
        <p className="hero-description">
          Innovative Software Engineer with expertise in Javascript and Web Development. 
          Offering 9+ years of experience in full software development lifecycle. 
          Quickly learn and master new technologies and work in both team and self-directed settings.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Get In Touch</a>
          <a 
            href="/Abhishek_Sharma_Resume.pdf" 
            download="Abhishek_Sharma_Resume.pdf"
            className="btn-secondary"
          >
            Download Resume
          </a>
          <a 
            href="https://github.com/abhisheksharma14" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
