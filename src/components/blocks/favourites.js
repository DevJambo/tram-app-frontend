import React, { useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "../../styles/blocks/favourites.css";

const Favourites = ({
  user,
  profile,
  handleSearch,
  savedFaves,
  setSavedFaves,
  login,
}) => {
  const windowScroll = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

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
    if (handleSearch(savedFaves)) {
      windowScroll();
    }
  };

  useEffect(() => {
    const { REACT_APP_API_URL } = process.env;
    if (profile) {
      axios
        .get(`${REACT_APP_API_URL}/fetch/${profile.email}`)
        .then((res) => {
          setSavedFaves(res.data.userData[0].favourite);
        })
        .catch((err) => console.log(err));
    }
  }, [profile]);

  return (
    <div className="favourites">
      <h2 className="favourite-header">
        {!savedFaves
          ? `Please set a Favourite `
          : `Your Favourite Tram Stop is ${savedFaves}`}
      </h2>
      <button
        className="searchFave button-2"
        onClick={handleSubmit}
        type="submit"
      >
        {!savedFaves ? `No Favourite` : `View times for ${savedFaves}`}
      </button>
    </div>
  );
};

Favourites.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  savedFaves: PropTypes.string.isRequired,
  setSavedFaves: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
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
