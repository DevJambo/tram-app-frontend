import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import Navbar from "./blocks/navbar";
import TramMap from "./pages/tram-map";
import HomePage from "./pages/home";
import Footer from "./blocks/footer";
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
      const token = user.access_token;
      axios
        .get(`${process.env.REACT_APP_API_URL}/login/${token}`)
        .then((res) => {
          setProfile(res.data.info);
          // setCookie("user", user.access_token, { path: "/" });
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="App">
      <div className="content">
        <Navbar user={user} profile={profile} login={login} logOut={logOut} />
        <Routes>
          <Route
            path="/"
            element={<HomePage user={user} profile={profile} login={login} />}
          />
          <Route path="/tram-map" element={<TramMap />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
