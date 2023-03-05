import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./blocks/navbar";
import LoginPage from "./pages/login-page";
import TramMap from "./pages/tram-map";
import HomePage from "./pages/home";
import UserPage from "./pages/user-page";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tram-map" element={<TramMap />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/user-page" element={<UserPage />} />
      </Routes>
    </div>
  );
};

export default App;
