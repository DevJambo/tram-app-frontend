import React from "react";
import "../../styles/pages/tram-map.css";
import GoogleMap from "../blocks/googleMap";
// import TramStopSelect from "../blocks/tram-stop-select";
// import Results from "../blocks/results";

const TramMap = () => {
  return (
    <div>
      <h2 className="map-header">Tram Map Page</h2>
      <img
        className="tram-page-map"
        src="/images/metrolink-network-map-feb-2023.jpg"
        alt="Manchester Metrolink Tram Map"
      />
      {/* <TramStopSelect />
      <Results /> */}
      <GoogleMap />
    </div>
  );
};

export default TramMap;
