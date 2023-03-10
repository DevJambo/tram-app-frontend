import React from "react";
import "../../styles/pages/tram-map.css";
import GoogleMap from "../blocks/googleMap";
// import TramStopSelect from "../blocks/tram-stop-select";
// import Results from "../blocks/results";

const TramMap = () => {
  return (
    <div className="map-page">
      <h2 className="map-header">Interactive Tram Line Map</h2>
      <div className="map-container">
        <GoogleMap />
      </div>
    </div>
  );
};

export default TramMap;
