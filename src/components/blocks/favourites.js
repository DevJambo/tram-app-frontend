import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import AddFave from "./addFave";

const Favourites = ({ user, profile, handleSearch, station }) => {
  if (!user)
    return <div className="login-msg">Please login to see favourites</div>;

  const initialState = {
    savedFaves: "",
  };
  const [savedFaves, setSavedFaves] = useState(initialState.savedFaves);
  const handleSubmit = (event) => {
    handleSearch(savedFaves);
    event.preventDefault();
  };

  useEffect(() => {
    if (profile) {
      axios
        .get(`http://localhost:4000/fetch/${profile.email}`)
        .then((res) => {
          setSavedFaves(res.data.userData[0].favourite);
        })
        .catch((err) => console.log(err));
    }
  }, [profile]);

  return (
    <div className="favourites">
      <h2>Favourites</h2>
      <button className="searchFave" onClick={handleSubmit} type="submit">
        {savedFaves}
      </button>
      <AddFave
        station={station}
        user={user}
        profile={profile}
        handleSearch={handleSearch}
        setSavedFaves={setSavedFaves}
      />
    </div>
  );
};

Favourites.propTypes = {
  profile: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  station: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default Favourites;
