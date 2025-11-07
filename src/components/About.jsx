import React from "react";
import PankajRaiPhoto from '../../images/pankajraiphoto.png'
// import pankajRaiResumeWeb from '../../images/pankajRaiResumeWeb.pdf'

function About() {
  return (
    <section id="about">
      <h1>
        About <span>Me</span>
      </h1>

      <div className="about-content">
        <img
          src={PankajRaiPhoto}
          alt="PankajRaiPhoto"
          className="pankaj-photo"
        />
        <div>
          <p>
            Dynamic and detail-oriented front-end developer with expertise in
            building responsive and interactive web applications using HTML,
            CSS, JavaScript, React and Express. Proficient in state management with
            Redux and experienced in designing modern, user-friendly interfaces
            using Chakra UI. Skilled in integrating authentication,
            real-time data management, and deployment. Strong understanding of
            the DOM and hands-on experience with Git for version control.
            Committed to delivering clean, efficient, and scalable code while
            ensuring seamless user experiences.
          </p>

          <a
            href={'https://www.canva.com/design/DAFkN2o-0pg/0HSq00NEPZeTV4vWuM9u4Q/view?utm_content=DAFkN2o-0pg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha6e1ba7ac8'}
            target="_blank"
            rel="noreferrer"
            id="btn"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
