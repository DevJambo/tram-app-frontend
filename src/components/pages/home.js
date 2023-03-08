import React, { useState } from "react";
import axios from "axios";
import "../../styles/pages/home.css";
import TramStopSelect from "../blocks/tram-stop-select";
import Results from "../blocks/results";
import Favourites from "../blocks/favourites";

const HomePage = () => {
  const [tramData, setTramData] = useState([]);

  const getTramData = async (station) => {
    const { REACT_APP_API_URL } = process.env;
    const response = await axios.get(`${REACT_APP_API_URL}?station=${station}`);
    await setTramData(response.data);
  };
  return (
    <div className="home-page">
      <h2 className="home-header">Home Page</h2>
      <img
        className="tram-map"
        src="/images/metrolink-network-map-feb-2023.jpg"
        alt="Manchester Metrolink Tram Map"
      />
      <TramStopSelect handleSearch={getTramData} />
      <Results tramData={tramData} />
      <Favourites />
    </div>
  );
};

export default HomePage;
