import React from "react";
import "../../styles/pages/tram-map.css";
import GoogleMap from "../blocks/googleMap";
// import TramStopSelect from "../blocks/tram-stop-select";
// import Results from "../blocks/results";

const TramMap = () => {
  return (
    <div>
      <h2 className="map-header">Interactive Map</h2>
      <GoogleMap />
    </div>
  );
};

export default TramMap;
