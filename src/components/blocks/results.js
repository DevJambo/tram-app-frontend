import React from "react";
import PropTypes from "prop-types";
import ServiceUpdates from "./serviceUpdates";
import "../../styles/blocks/results.css";

const Results = ({ tramData }) => {
  const incomingTrams = tramData[0] ? tramData[0] : [];
  const departingTrams = tramData[1] ? tramData[1] : [];
  return (
    <div className="results-box-component">
      <div className="results-box">
        <h3> Next Trams from {incomingTrams.StationLocation}:</h3>
        <p className="tram-destination">
          {" "}
          {incomingTrams && incomingTrams.Dest0
            ? `Destination: ${incomingTrams.Dest0}`
            : null}
        </p>

        <p className="tram-time">
          {incomingTrams && incomingTrams.Wait0
            ? `Time: ${incomingTrams.Wait0} mins`
            : ``}
        </p>

        <p className="tram-destination">
          {" "}
          {incomingTrams && incomingTrams.Dest1
            ? `Destination: ${incomingTrams.Dest1}`
            : null}
        </p>

        <p className="tram-time">
          {incomingTrams && incomingTrams.Wait1
            ? `Time: ${incomingTrams.Wait0} mins`
            : ``}
        </p>

        <p className="tram-destination">
          {" "}
          {departingTrams && departingTrams.Dest0
            ? `Destination: ${departingTrams.Dest0}`
            : null}
        </p>
        <p className="tram-time">
          {departingTrams && departingTrams.Wait0
            ? `Time: ${departingTrams.Wait0} mins`
            : ``}
        </p>
        <p className="tram-destination">
          {" "}
          {departingTrams && departingTrams.Dest1
            ? `Destination: ${departingTrams.Dest1}`
            : null}
        </p>
        <p className="tram-time">
          {departingTrams && departingTrams.Wait1
            ? `Time: ${departingTrams.Wait1} mins`
            : ``}
        </p>
        <ServiceUpdates tramData={tramData} />
      </div>
    </div>
  );
};

Results.propTypes = {
  tramData: PropTypes.arrayOf(PropTypes.shape({ wait: PropTypes.number }))
    .isRequired,
};

export default Results;
