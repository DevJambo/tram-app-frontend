import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/blocks/serviceUpdates.css";

const ServiceUpdates = ({ tramData }) => {
  const [messageHidden, setMessageHidden] = useState(true);

  const incomingTrams = tramData[0] ? tramData[0] : [];
  const renderMessages = () => {
    console.log(incomingTrams.MessageBoard);
    if (incomingTrams && messageHidden) {
      setMessageHidden(false);
    } else {
      setMessageHidden(true);
    }
  };
  return (
    <div className="service-message">
      <button className="services" onClick={renderMessages} type="button">
        Click for Service Updates&#8681;
      </button>
      <p id="message">
        {incomingTrams && !messageHidden ? `${incomingTrams.MessageBoard}` : ``}
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
