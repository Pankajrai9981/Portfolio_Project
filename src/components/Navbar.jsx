import React, { useState } from "react";
// import Resume from '../../images/pankajRaiResumeWeb.pdf';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav>
        <div className="logo">Pankaj</div>
        <div className="menu-container">
          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#project" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            <li>
              <a 
                href={'https://www.canva.com/design/DAFkN2o-0pg/0HSq00NEPZeTV4vWuM9u4Q/view?utm_content=DAFkN2o-0pg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha6e1ba7ac8'} 
                target="_blank" 
                rel="noreferrer"
                className="resumeLink"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="menu-toggle" onClick={handleToggle}>
          &#9776;
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
