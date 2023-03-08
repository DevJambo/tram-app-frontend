import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../styles/blocks/navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  return (
    <div className="Navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/tram-map">Tram Map</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/login-page">Login/Signup</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/user-page">Profile</Link>
        </li>
        <li>
          {profile ? (
            <div>
              <p>Name: {profile.name}</p>
              <p>Email Address: {profile.email}</p>
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
