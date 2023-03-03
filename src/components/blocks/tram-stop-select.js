import React, { useState } from "react";
import PropTypes from "prop-types";
import tramstops from "../../content/tramstops.json";

const TramStopSelect = ({ handleSearch }) => {
  const [station, setStation] = useState("Select Tram Stop");
  const handleSelectStation = async (event) => {
    setStation(event.target.value);
    handleSearch(station);
  };
  return (
    <div>
      <label htmlFor="tram-stop-select">
        Select Tram Stop
        <select
          id="tram-stop-select"
          name="tram-stop-select"
          value={station}
          onChange={handleSelectStation}
        >
          {tramstops.map((tramstop) => {
            return (
              <option key={tramstop} value={tramstop}>
                {tramstop}
              </option>
            );
          })}
          ;
        </select>
      </label>
    </div>
  );
};

TramStopSelect.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default TramStopSelect;
