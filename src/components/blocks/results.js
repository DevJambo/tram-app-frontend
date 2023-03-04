import React from "react";
// import PropTypes from "prop-types";
// import PropTypes from "prop-types";

const Results = ({ tramData }) => {
  console.log(tramData[0]);
  if (tramData[0]) {
    console.log(tramData[0].Line);
  }

  const incomingTrams = tramData[0] ? tramData[0] : [];
  const departingTrams = tramData[1] ? tramData[1] : [];

  // return <p>Hi!</p>;

  return (
    <>
      <p>Station: {incomingTrams ? incomingTrams.StationLocation : `?`}</p>
      <p>Destination: {incomingTrams ? incomingTrams.Dest0 : `?`}</p>
      <p>Wait: {incomingTrams ? `${incomingTrams.Wait0} mins` : `?`}</p>
      <p>Destination: {incomingTrams ? incomingTrams.Dest1 : `?`}</p>
      <p>Wait: {incomingTrams ? `${incomingTrams.Wait1} mins` : `?`}</p>

      <br />
      <p>Destination: {departingTrams ? departingTrams.Dest0 : `?`}</p>
      <p>Wait: {departingTrams ? `${departingTrams.Wait0} mins` : `?`}</p>
      <p>Destination: {departingTrams ? departingTrams.Dest1 : `?`}</p>
      <p>Wait: {departingTrams ? `${departingTrams.Wait1} mins` : `?`}</p>
    </>
  );
};

// tramData.PropTypes = {
//   filteredData: PropTypes.func.isRequired,
// };

export default Results;
