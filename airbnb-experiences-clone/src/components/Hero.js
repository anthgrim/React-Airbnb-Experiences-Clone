import React from "react";
import image from "../images/imgCollection.jpg";

const Hero = () => {
  return (
    <>
      <img src={image} alt="imgCollection" className="hero-img" />
      <div className="header">
        <h1 className="main-title">Online Experiences</h1>
        <h3 className="sub-title">
          Join unique interactive activities led by <br />
          one-of-a-kind hosts-all without leaving <br />
          home.
        </h3>
      </div>
    </>
  );
};

export default Hero;
