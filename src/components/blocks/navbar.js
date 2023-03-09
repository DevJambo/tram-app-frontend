import React from "react";
import { Link } from "react-router-dom";
// import LoginPage from "../pages/login-page";
import "../../styles/blocks/navbar.css";

const Navbar = ({ user, profile, login, logOut }) => {
  return (
    <div className="Navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="navbar-link" to="/">
            Home
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-link" to="/tram-map">
            Tram Map
          </Link>
        </li>
        {/* <li className="navbar-links-item">
          <Link to="/login-page">Login/Signup</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/user-page">Profile</Link>
        </li> */}
        <li>
          {profile ? (
            <div>
              <h3>User Logged in</h3>
              <p>Name: {profile.name}</p>
              <p>Email: {profile.email}</p>
              <button onClick={logOut}>Log out</button>
            </div>
          ) : (
            <button onClick={() => login()}>Sign in with Google 🚀 </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
