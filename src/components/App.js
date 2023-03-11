import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import Navbar from "./blocks/navbar";
import TramMap from "./pages/tram-map";
import HomePage from "./pages/home";
import "../styles/global.css";
import "../styles/App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
  };

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

  return (
    <div className="App">
      <Navbar user={user} profile={profile} login={login} logOut={logOut} />
      <Routes>
        <Route path="/" element={<HomePage user={user} profile={profile} />} />
        <Route path="/tram-map" element={<TramMap />} />
      </Routes>
    </div>
  );
};

export default App;
