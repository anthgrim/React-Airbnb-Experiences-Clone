import React from "react";
import logo from "../images/airbnb-logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo" className="navbar-logo" />
      </div>
    </>
  );
};

export default Navbar;
