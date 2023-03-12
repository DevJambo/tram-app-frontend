import React from "react";

const GoogleMap = () => {
  return (
    <div className="googlemap">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=11OJEPdRAqDjYNPXWu1NTo5rfcMQ&hl=en_US&ehbc=2E312F"
        width="100%"
        height="1280"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        title="map"
      />
    </div>
  );
};

export default GoogleMap;
