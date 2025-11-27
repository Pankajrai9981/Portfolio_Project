import React from "react";
import Project1 from '../assets/todo.gif'
import Project2 from '../assets/project2.gif'
import icon_react from '../../images/icon-react.png'
import icon_redux from '../../images/icon-redux.png'
import chakra_ui from '../../images/icon-chakra-ui.png'
import firebase from '../../images/firebase-logo.png'



function Projects() {
  return (
    <section id="project">
      <h1 style={{ marginBottom: "2rem" }}>Projects</h1>

      <div className="project-container">

        {/* project1  */}
        <div className="project-card">
          <img src={Project1} alt="" />
          <h2>Full stack Todo App</h2>
          <p>
            Developed a full-stack ToDo application using React, Node.js, and Express with JWT authentication, allowing users to securely add, update, delete, and manage tasks through a responsive interface.
          </p>
          <div className="tools">
            <img src={icon_react} alt="React" />
            <img src={icon_redux} alt="Redux" />
            <img src={chakra_ui} alt="ChakraUI" />
          </div>
          <div className="project-links">
            <button>
              <a href="https://github.com/Pankajrai9981/ToDo" target="_blank" rel="noreferrer">Live Demo</a>
            </button>
            <button>
              <a href="https://github.com/Pankajrai9981/ToDo" target="_blank" rel="noreferrer">GitHub</a>
            </button>
          </div>
        </div>
        {/* project2  */}
        <div className="project-card">
          <img src={Project2} alt="" />
          <h2>Full stack E-Commerce Web Application</h2>
          <p>
            Built a MERN eCommerce platform with product browsing, cart, secure JWT authentication, admin product management, and responsive UI enabling users to shop, manage orders, and view purchases easy.
          </p>
          <div className="tools">
            <img src={icon_react} alt="React" />
            <img src={icon_redux} alt="Redux" />
            <img src={chakra_ui} alt="ChakraUI" />
          </div>
          <div className="project-links">
            <button>
              <a href="https://github.com/Pankajrai9981/E-commerce" target="_blank" rel="noreferrer">Live Demo</a>
            </button>
            <button>
              <a href="https://github.com/Pankajrai9981/E-commerce" target="_blank" rel="noreferrer">GitHub</a>
            </button>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Projects;
