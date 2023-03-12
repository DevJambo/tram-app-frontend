import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/blocks/navbar.css";

const Navbar = ({ profile, login, logOut }) => {
  const getInitials = () => {
    const initials = profile.given_name[0] + profile.family_name[0];
    return initials;
  };
  return (
    <div className="Navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="navbar-link" to="/">
            <img className="logo" src="/images/bee1.png" alt="bee logo" />
            TramBee
          </Link>
        </li>
        <li className="navbar-links-item map-box">
          <Link className="navbar-link" to="/tram-map">
            <img
              className="map-logo"
              src="/images/maplogo3.png"
              alt="Interactive Map logo"
            />
          </Link>
        </li>
      </ul>

      {profile ? (
        <div className="google-login">
          <p className="user-name">{getInitials(profile)}</p>
          <button className="log-out-button" onClick={logOut} type="submit">
            Sign out
          </button>
        </div>
      ) : (
        <button className="log-in-button" onClick={login} type="submit">
          Sign in
        </button>
      )}
    </div>
  );
};

Navbar.propTypes = {
  profile: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
};

export default Navbar;
