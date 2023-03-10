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
            <img className="logo" src="/images/bee1.png" alt="bee logo" />
            Tram-Bee
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-link" to="/tram-map">
            Map
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
        <div>
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}
    </div>
  );
};

export default Navbar;
