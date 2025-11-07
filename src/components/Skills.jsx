import React from "react";
import icon_react from '../../images/icon-react.png'
import icon_redux from '../../images/icon-redux.png'
import chakra_ui from '../../images/icon-chakra-ui.png'
import javascript_icon from '../../images/icon-javascript.png'
import icon_css_logo from '../../images/icon-css-logo.png'
import htmlicon from '../../images/icons8-html-5-480.png'
import firebase from '../../images/firebase-logo.png'
import bootstrap from '../../images/icons8-bootstrap-100.png'
import postman from '../../images/postman-icon.png'
import github from '../../images/github-icon.png'
import vscodeIcon from '../../images/icon-visual-studio-code.png'






function Skills() {
  return (
    <section id="skills">
      <h1 style={{ marginBottom: "1.5rem" }}>Technical <span>Skills</span></h1>
      <div className="skills-container">
        <div className="skill">
          <img src={icon_react} alt="React" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src={icon_redux} alt="Redux" />
          <p>Redux</p>
        </div>
        <div className="skill">
          <img src={chakra_ui} alt="ChakraUI" />
          <p>ChakraUI</p>
        </div>
        <div className="skill">
          <img src={javascript_icon} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img src={icon_css_logo} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <img src={htmlicon} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <img src={firebase} alt="Firebase" />
          <p>Firebase</p>
        </div>
        <div className="skill">
          <img src={bootstrap} alt="BootStrap" style={{ borderRadius: "50%", width: "100px", height: "83px" }} />
          <p>BootStrap</p>
        </div>
        <div className="skill">
          <img src={postman} alt="Postman" style={{ borderRadius: "50%" }} />
          <p>Postman</p>
        </div>
        <div className="skill">
          <img src={github} alt="Github" style={{ borderRadius: "50%" }} />
          <p>Github</p>
        </div>
        <div className="skill">
          <img src={vscodeIcon} alt="VS Code" />
          <p>Visual Studio Code</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
