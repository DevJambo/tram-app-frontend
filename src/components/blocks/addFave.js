import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddFave = ({ station, user, profile, handleSearch, setSavedFaves }) => {
  // const noUser = () => {
  //   toast.warn("Login to set a favourite", {
  //     position: "top-center",
  //     autoClose: 2000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // };
  const noStation = () => {
    toast.warn("Please select a station", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!profile) {
    //   return noUser();
    // }
    if (station === "Select Tram Stop") {
      return noStation();
    }
    axios
      .post("http://localhost:4000/insert", {
        user: profile.email,
        Favourite: station,
      })
      .then(setSavedFaves(station));
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
