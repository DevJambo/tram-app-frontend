import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import AddFave from "./addFave";
import "../../styles/blocks/favourites.css";

const Favourites = ({
  user,
  profile,
  handleSearch,
  station,
  savedFaves,
  setSavedFaves,
  login,
}) => {
  if (!user)
    // return <div className="login-msg">Please sign in to see Favourites</div>;
    return (
      <button className="button-2 login-msg" onClick={login} type="submit">
        Please sign in to see Favourites
      </button>
    );

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
      <h2 className="favourite-header">
        Your Favourite Tram Stop is {savedFaves}
      </h2>
      <button
        className="searchFave button-2"
        onClick={handleSubmit}
        type="submit"
      >
        View times for {savedFaves}
      </button>
    </div>
  );
};

Favourites.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  station: PropTypes.string.isRequired,
  user: PropTypes.shape({
    access_token: PropTypes.string,
  }),
  profile: PropTypes.shape({
    email: PropTypes.string,
  }),
};

Favourites.defaultProps = {
  profile: null,
  user: null,
};

export default Favourites;
