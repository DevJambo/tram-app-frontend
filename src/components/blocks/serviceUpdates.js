import React from "react";
import PropTypes from "prop-types";
import "../../styles/blocks/serviceUpdates.css";
import "../../styles/elements/button.css";

const ServiceUpdates = ({ tramData }) => {
  const incomingTrams = tramData[0] ? tramData[0] : [];
  const renderMessages = () => {
    const mssg = document.getElementById("message");
    if (mssg.style.display === "none") {
      mssg.style.display = "block";
    } else {
      mssg.style.display = "none";
    }
  };
  return (
    <div className="service-message">
      <button
        className="services button-1"
        onClick={renderMessages}
        type="button"
      >
        Service Updates&#8681;
      </button>
      <br />
      <p id="message">
        {incomingTrams && incomingTrams.MessageBoard
          ? `${incomingTrams.MessageBoard}.`
          : ``}
      </p>
    </div>
  );
};

ServiceUpdates.propTypes = {
  tramData: PropTypes.shape({
    line: PropTypes.string,
  }).isRequired,
};

export default ServiceUpdates;
