import React from "react";
import gitImg from '../../images/github-icon.png'
import linkdinImg from '../../images/linkedin-icon.jpg'
import emailIcom from '../../images/email-icon.png'
import locationIcon from '../../images/icon-location.png'
import callicon from '../../images/icon-call.png'


function Contact() {
  return (
    <section id="contact">
      <h1>Contact <span>Me</span></h1>
      <div className="contact-container">
        <div className="contact-card">
          <img src={callicon} alt="Phone" />
          <h3><a href="tel:+91 9131589349"></a>+91 9131589349</h3>
        </div>

        <div className="contact-card"  onClick={() => window.open("https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh", "_blank")}>
          <img src={locationIcon} alt="Location" />
          <h3>Bhopal , Madhya Pradesh</h3>
        </div>

        <div className="contact-card">
          <a href="pankajrai05575@gmail.com" onClick={() => window.location.href = "mailto:pankajrai@example.com"} >
            <img src={emailIcom} alt="Email" />
            <h3>pankajrai05575@gmail.com</h3>
          </a>
        </div>
        <div className="contact-card">
          <a href="https://github.com/Pankajrai9981">
            <img src={gitImg} alt="gitHub" />
            <h3>github.com/Pankajrai9981</h3>
          </a>
        </div>
        <div className="contact-card">
          <a href="https://www.linkedin.com/in/pankajrai9981/">
            <img src={linkdinImg} alt="linkedIn" />
            <h3>www.linkedin.com/in/pankajrai9981/</h3>
          </a>
        </div>
      </div>

      

      {/* <div className="social-links" style={{ height: "60px", marginTop: "15px", display: "inline-block" }}>
        <a href="" target="_blank" rel="noreferrer">
          <img src="./images/icons8-linkedin.png" alt="LinkedIn" className="social-icon" style={{ width: "50px" }} />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <img src="./images/icons8-github.png" alt="GitHub" className="social-icon" style={{ width: "50px", display: "inline-block" }} />
        </a>
      </div> */}
    
    </section>
  );
}

export default Contact;
