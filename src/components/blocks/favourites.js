import React, { useState, useEffect } from "react";
import axios from "axios";

const Favourites = ({ user, profile }) => {
  if (!user)
    return <div className="login-msg">Please login to see favourites</div>;

  const initialState = {
    savedFaves: "",
  };

  const [savedFaves, setSavedFaves] = useState(initialState.savedFaves);

  useEffect(() => {
    console.log(user);
    console.log(profile);
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
      {savedFaves}
    </div>
  );
};

export default Favourites;
