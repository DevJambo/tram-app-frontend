import React from "react";
import { FaGithub } from "react-icons/fa";
import "../../styles/blocks/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo2" src="/images/bee1.png" alt="bee logo" />
      <ul className="git-links">
        <li className="footer-items">
          <a href="https://github.com/James-Sample" className="git-link">
            <FaGithub className="git-icon" />
            James Sample
          </a>
        </li>
        <li className="footer-items">
          <a href="https://github.com/DevJambo" className="git-link">
            <FaGithub className="git-icon" />
            <span className="dev-name">James Goodman</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
