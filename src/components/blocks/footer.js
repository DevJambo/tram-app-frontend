import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "../../styles/blocks/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Link className="footer-logo" to="/">
          <img className="logo" src="/images/bee1.png" alt="bee logo" />
        </Link>
        <ul className="git-links">
          <li>
            <a href="https://github.com/James-Sample" className="git-links">
              <FaGithub />
              James Sample
            </a>
          </li>
          <li>
            <a href="https://github.com/DevJambo" className="git-links">
              <FaGithub />
              James Goodman
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
