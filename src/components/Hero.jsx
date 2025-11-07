import React from "react";
import githubicon from '../../images/icons8-github.png' 
import linkedin from '../../images/icons8-linkedin.png'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="intro">
          Hi, I'm <span>Pankaj Rai</span>
        </h1>
        <br />
        <div className="typing-container">
          <img
            className="typing-text"
            src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=900&size=22&center=true&width=500&pause=1000&color=ccd6f6&lines=Frontend+Developer+🎨💻;Building+Digital+Experiences+🚀"
            alt="Typing Animation"
          />
        </div>
      </div>

      <br />
      <div className="social-links" style={{ height: "60px" }}>
        <a href="https://github.com/Pankajrai9981" target="_blank" rel="noreferrer">
          <img src={githubicon} alt="GitHub" className="social-icon" style={{ width: "50px" }} />
        </a>
        <a href="https://www.linkedin.com/in/pankaj-rai-data-analyst/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="LinkedIn" className="social-icon" style={{ width: "50px" }} />
        </a>
      </div>
    </section>
  );
}

export default Hero;
