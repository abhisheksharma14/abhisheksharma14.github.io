import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a 
            href="https://github.com/abhisheksharma14" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a 
            href="https://in.linkedin.com/in/abhisheksharma94" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a 
            href="https://stackoverflow.com/users/2650209/abhishek-sharma" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Stack Overflow"
          >
            Stack Overflow
          </a>
        </div>
        <div className="footer-text">
          <p>Designed & Built by Abhishek Sharma</p>
          <p className="copyright">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
