import React from "react";
import { Link } from "react-router-dom";
// import LoginPage from "../pages/login-page";
import "../../styles/blocks/navbar.css";

const Navbar = ({ user, profile, login, logOut }) => {
  const getInitials = (profile) => {
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
        <li className="navbar-links-item">
          <Link className="navbar-link" to="/tram-map">
            Interactive Map
          </Link>
        </li>
        {/* <li className="navbar-links-item">
          <Link to="/login-page">Login/Signup</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/user-page">Profile</Link>
        </li> */}
      </ul>

      {profile ? (
        <div className="google-login">
          <p className="user-name">{getInitials(profile)}</p>
          <button className="log-out-button" onClick={logOut}>Sign out</button>
        </div>
      ) : (
        <button className="log-in-button" onClick={() => login()}>Sign in</button>
      )}
    </div>
  );
};

export default Navbar;
