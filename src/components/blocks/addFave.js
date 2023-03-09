import React, { useState } from "react";
import axios from "axios";

const AddFave = ({ station, user, profile }) => {
  const [fave, setFave] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFave(station);
    console.log(fave);
    console.log(profile.email);
    axios.post("http://localhost:4000/insert", {
      user: profile.email,
      Favourite: fave,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Favourites</button>
      </form>
    </div>
  );
};

export default AddFave;
