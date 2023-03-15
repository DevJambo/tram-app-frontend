import React from "react";
import { Link } from "react-router-dom";
import "../../styles/blocks/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link className="footer-logo" to="/">
        <img className="logo" src="/images/bee1.png" alt="bee logo" />
        TramBee
      </Link>
    </div>
  );
};

export default Footer;
