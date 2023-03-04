import React from "react";
// import PropTypes from "prop-types";

const Results = ({ tramData }) => {
  const incoming = JSON.stringify(tramData[0]);
  const dest1 = incoming;
  //   const firstTram = tramData[0].StationLocation;
  //   const outgoing = tramData[1];
  console.log(incoming);
  //   console.log(outgoing);
  return <p>{incoming}</p>;
};

export default Results;
