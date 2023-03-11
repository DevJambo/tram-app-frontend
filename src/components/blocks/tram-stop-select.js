import React, { useState } from "react";
import PropTypes from "prop-types";
import tramstops from "../../content/tramstops.json";
import AddFave from "./addFave";
import Favourites from "./favourites";
import "../../styles/blocks/tram-stop-select.css";

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
    <div className="tram-select-component">
      <form onSubmit={handleSubmit} className="tram-select-form">
        <label htmlFor="tram-stop-select">
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
      <Favourites
        station={station}
        handleSearch={handleSearch}
        user={user}
        profile={profile}
      />
    </div>
  );
};

TramStopSelect.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default TramStopSelect;
