import React from "react";
import PropTypes from "prop-types";
import "../../styles/blocks/serviceUpdates.css";

const ServiceUpdates = ({ tramData }) => {
  const incomingTrams = tramData[0] ? tramData[0] : [];
  const renderMessages = async () => {
    console.log(incomingTrams.MessageBoard);
    const mssg = await document.getElementById("message");
    const toggle =
      incomingTrams && mssg.style.display === "none"
        ? (mssg.style.display = "block")
        : (mssg.style.display = "none");
    return toggle;
  };
  return (
    <div className="service-message">
      <button className="services" onClick={renderMessages} type="button">
        Click for Service Updates&#8681;
      </button>
      <p id="message">
        {incomingTrams && incomingTrams.MessageBoard
          ? `${incomingTrams.MessageBoard}`
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
