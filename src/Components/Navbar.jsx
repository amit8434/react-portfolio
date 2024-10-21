import React from "react";
import pdf from "./Pdf/Resume Amit kumar0.pdf";
const Navbar = () => {
  return (
    <>
      <div className="container nav_bar item-flex">
        <div className="left nav-items">
          <h1>Portfolio</h1>
        </div>
        <div className="right">
          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning"
          >
            Download Resume
          </a>
          <a href="#home" className="nav_items">
            Home
          </a>

          <a href="#experience" className="nav_items">
            Experience
          </a>
          <a href="#skills" className="nav_items">
            Skills
          </a>
          <a href="#education" className="nav_items">
            Education
          </a>
          <a href="#projects" className="nav_items">
            Projects
          </a>
          <a href="#contact" className="nav_items">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
