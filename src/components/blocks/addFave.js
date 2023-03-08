import React, { useState } from "react";
import axios from "axios";

const AddFave = ({ station }) => {
  const [fave, setFave] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFave(station);
    console.log(fave);
    axios.post("http://localhost:4000/insert", {
      user: "james",
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
