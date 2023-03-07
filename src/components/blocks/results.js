import React from "react";
import "../../styles/blocks/results.css";

// eslint-disable-next-line react/prop-types
const Results = ({ tramData }) => {
  // console.log(tramData[0]);
  // if (tramData[0]) {
  //   console.log(tramData[0].Line);
  // }
  const incomingTrams = tramData[0] ? tramData[0] : [];
  const departingTrams = tramData[1] ? tramData[1] : [];
  if (!tramData) {
    return null;
  }
  return (
    <div className="resultsbox">
      <p> {incomingTrams ? incomingTrams.StationLocation : `?`}</p>
      <br />
      <p> {incomingTrams ? incomingTrams.Dest0 : `?`}</p>
      <p>
        {" "}
        {incomingTrams && incomingTrams.Wait0 !== ""
          ? `${incomingTrams.Wait0} mins`
          : ``}
      </p>
      <p> {incomingTrams ? incomingTrams.Dest1 : `?`}</p>
      <p>
        {" "}
        {incomingTrams && incomingTrams.Wait1 !== ""
          ? `${incomingTrams.Wait1} mins`
          : ``}
      </p>

      <br />
      <p> {departingTrams ? departingTrams.Dest0 : `?`}</p>
      <p>
        {" "}
        {departingTrams && departingTrams.Wait0 !== ""
          ? `${departingTrams.Wait0} mins`
          : ``}
      </p>
      <p> {departingTrams ? departingTrams.Dest1 : `?`}</p>
      <p>
        {" "}
        {departingTrams && departingTrams.Wait1 !== ""
          ? `${departingTrams.Wait1} mins`
          : ``}
      </p>
    </div>
  );
};

export default Results;
