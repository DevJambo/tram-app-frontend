import React from "react";
import axios from "axios";

const AddFave = ({ station, user, profile }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/insert", {
      user: profile.email,
      Favourite: station,
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
