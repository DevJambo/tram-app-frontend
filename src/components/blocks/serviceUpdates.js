import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/blocks/serviceUpdates.css";
import "../../styles/elements/button.css";

const ServiceUpdates = ({ tramData }) => {
  const [messageHidden, setMessageHidden] = useState(true);

  const incomingTrams = tramData[0] ? tramData[0] : [];
  const windowScroll = () => {
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    });
  };
  const renderMessages = () => {
    if (incomingTrams && !messageHidden) {
      setMessageHidden(true);
    } else {
      setMessageHidden(false);
      if (messageHidden) {
        windowScroll();
      }
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
      <p id="message">
        {incomingTrams && !messageHidden ? `${incomingTrams.MessageBoard}` : ``}
      </p>
    </div>
  );
};

ServiceUpdates.propTypes = {
  tramData: PropTypes.arrayOf(PropTypes.shape({ wait: PropTypes.number }))
    .isRequired,
};

export default ServiceUpdates;
