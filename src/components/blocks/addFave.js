import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddFave = ({ station, user, profile }) => {
  const noStation = () => {
    toast("Please select a station");
  };
  const noUser = () => {
    toast("Login to set a favourite");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!profile) {
      return noUser();
    }
    if (station === "Select Station") {
      return noStation();
    }
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
      <ToastContainer />
    </div>
  );
};

export default AddFave;
