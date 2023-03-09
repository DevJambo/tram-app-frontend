import React, { useState, useEffect } from "react";
import axios from "axios";

const Favourites = ({ user, profile }) => {
  if (!user)
    return <div className="login-msg">Please login to see favourites</div>;

  const initialState = {
    savedFaves: [],
  };

  const [savedFaves, setSavedFaves] = useState(initialState.savedFaves);

  useEffect(() => {
    axios
      .get("http://localhost:4000/fetch")
      .then((res) => {
        setSavedFaves(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="favourites">
      <h2>Favourites</h2>
      {savedFaves.map((savedFave) => (
        <div className="faveItem">{savedFave.Favourite}</div>
      ))}
    </div>
  );
};

export default Favourites;
