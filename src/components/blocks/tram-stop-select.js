import React, { useState } from "react";
import PropTypes from "prop-types";
import tramstops from "../../content/tramstops.json";
import Favourites from "./favourites";
import AddFave from "./addFave";
import "../../styles/blocks/tram-stop-select.css";
import "../../styles/elements/select.css";
import "../../styles/elements/button.css";

const TramStopSelect = ({ handleSearch, user, profile, login }) => {
  const [station, setStation] = useState("Select Station");

  const initialState = {
    savedFaves: "",
  };
  const [savedFaves, setSavedFaves] = useState(initialState.savedFaves);

  const handleSelectStation = async (event) => {
    setStation(event.target.value);
  };

  const windowScroll = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(station);
    if (handleSearch(station)) {
      windowScroll();
    }
  };

  return (
    <div className="tram-select-component">
      <Favourites
        station={station}
        handleSearch={handleSearch}
        user={user}
        profile={profile}
        savedFaves={savedFaves}
        setSavedFaves={setSavedFaves}
        login={login}
      />
      <form onSubmit={handleSubmit} className="tram-select-form">
        <label className="select-container" htmlFor="tram-stop-select">
          <select
            className="select-1"
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
        <button className="submit-button button-1" type="submit">
          Get Tram Times
        </button>
      </form>
      {user && (
        <AddFave
          station={station}
          user={user}
          profile={profile}
          handleSearch={handleSearch}
          setSavedFaves={setSavedFaves}
        />
      )}
    </div>
  );
};

TramStopSelect.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  user: PropTypes.shape({
    access_token: PropTypes.string,
  }),
  profile: PropTypes.shape({
    email: PropTypes.string,
  }),
};

TramStopSelect.defaultProps = {
  profile: null,
  user: null,
};

export default TramStopSelect;
