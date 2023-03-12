import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "../../styles/pages/home.css";
import TramStopSelect from "../blocks/tram-stop-select";
import Results from "../blocks/results";

const HomePage = ({ user, profile, login }) => {
  const [tramData, setTramData] = useState([]);

  const getTramData = async (station) => {
    const { REACT_APP_API_URL } = process.env;
    const response = await axios.get(`${REACT_APP_API_URL}?station=${station}`);
    await setTramData(response.data);
  };
  return (
    <div className="home-page">
      {/* <h2 className="home-header">Home Page</h2> */}
      <img
        className="tram-map"
        src="/images/metrolink-network-map-feb-2023.jpg"
        alt="Manchester Metrolink Tram Map"
      />
      <TramStopSelect
        handleSearch={getTramData}
        user={user}
        profile={profile}
        login={login}
      />
      {tramData.length ? <Results tramData={tramData} /> : null}
    </div>
  );
};

//       <Results tramData={tramData} />

export default HomePage;
