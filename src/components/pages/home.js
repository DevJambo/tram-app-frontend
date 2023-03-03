import React, { useState } from "react";
import axios from "axios";
import "../../styles/home.css";
import TramStopSelect from "../blocks/tram-stop-select";

const HomePage = () => {
  const [tramData, setTramData] = useState([]);

  const getTramData = async () => {
    const { REACT_APP_API_URL } = process.env;
    const response = await axios.get(REACT_APP_API_URL);
    await setTramData(response.data);
    console.log(tramData);
  };
  return (
    <div>
      <h2 className="home-header">Home Page</h2>
      <img
        className="tram-map"
        src="/images/metrolink-network-map-feb-2023.jpg"
        alt="Manchester Metrolink Tram Map"
      />
      <TramStopSelect handleSearch={getTramData} />
    </div>
  );
};

export default HomePage;
