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
            Full-stack ToDo app with authentication, built using React and Express, enabling users to add, update, and delete tasks securely
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
          <h2>Full stack E-Commerce App</h2>
          <p>
            A full-stack E-Commerce application built with the PERN stack, featuring authentication, product listing, cart management, and secure checkout for a smooth online shopping experience.
          </p>
          <div className="tools">
            <img src={icon_react} alt="React" />
            <img src={icon_redux} alt="Redux" />
            <img src={chakra_ui} alt="ChakraUI" />
          </div>
          <div className="project-links">
            <button>
              <a href="https://github.com/Pankajrai9981/E-commerce.git" target="_blank" rel="noreferrer">Live Demo</a>
            </button>
            <button>
              <a href="https://github.com/Pankajrai9981/E-commerce.git" target="_blank" rel="noreferrer">GitHub</a>
            </button>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Projects;
