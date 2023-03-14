import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "../../styles/pages/home.css";
import TramStopSelect from "../blocks/tram-stop-select";
import Results from "../blocks/results";

const HomePage = ({ user, profile, login }) => {
  const [tramData, setTramData] = useState([]);

  const scrollWin = () => {
    // console.log(station);
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  const getTramData = async (station) => {
    const { REACT_APP_API_URL } = process.env;
    const response = await axios.get(`${REACT_APP_API_URL}?station=${station}`);
    setTramData(response.data);
    scrollWin();
  };
  return (
    <div className="home-page">
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

HomePage.propTypes = {
  login: PropTypes.func.isRequired,
  user: PropTypes.shape({
    access_token: PropTypes.string,
  }),
  profile: PropTypes.shape({
    email: PropTypes.string,
  }),
};

HomePage.defaultProps = {
  profile: null,
  user: null,
};

export default HomePage;
