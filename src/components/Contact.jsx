import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-label">Location</div>
              <div className="contact-value">Bangalore, KA, India</div>
            </div>
            
            <div className="contact-item">
              <div className="contact-label">Email</div>
              <div className="contact-value">
                <a href="mailto:contact.abhishek.es@gmail.com">
                  contact.abhishek.es@gmail.com
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-label">Phone</div>
              <div className="contact-value">
                <a href="tel:+918950181911">(+91) 8950-181911</a>
                <br />
                <a href="tel:+917988521014">(+91) 7988-521014</a>
              </div>
            </div>
          </div>

          <div className="contact-links">
            <a 
              href="https://in.linkedin.com/in/abhisheksharma94" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn Profile
            </a>
            <a 
              href="https://github.com/abhisheksharma14" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub Profile
            </a>
            <a 
              href="https://stackoverflow.com/users/2650209/abhishek-sharma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              Stack Overflow
            </a>
          </div>

          <div className="contact-buttons">
            <a href="mailto:contact.abhishek.es@gmail.com" className="btn-contact">
              Say Hello
            </a>
            <a 
              href="/Abhishek_Sharma_Resume.pdf" 
              download="Abhishek_Sharma_Resume.pdf"
              className="btn-download"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
