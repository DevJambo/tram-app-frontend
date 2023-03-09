import React, { useState } from "react";
import PropTypes from "prop-types";
import tramstops from "../../content/tramstops.json";
import AddFave from "./addFave";

const TramStopSelect = ({ handleSearch, user, profile }) => {
  const [station, setStation] = useState("Select Station");
  const handleSelectStation = async (event) => {
    setStation(event.target.value);
  };
  const handleSubmit = (event) => {
    handleSearch(station);
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
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
        <button className="submit-button" type="submit">
          Search Station
        </button>
      </form>
      <AddFave station={station} user={user} profile={profile} />
    </div>
  );
};

TramStopSelect.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default TramStopSelect;
