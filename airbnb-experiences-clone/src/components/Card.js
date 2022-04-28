import React from "react";
import swim from "../images/swim.jpg";
import star from "../images/star.jpg";

const Card = () => {
  return (
    <>
      <div className="card">
        <button className="card-btn">SOLD OUT</button>
        <img src={swim} alt="swim" className="card-img" />
        <section className="card-content">
          <div className="row">
            <img src={star} alt="star" className="card-icon" />
            <span className="score">5.0</span>
            <span className="score review">(6) - USA</span>
          </div>
          <div className="row">
            <span className="description">Life lessons with Katie Zafares</span>
          </div>
          <div className="row">
            <span className="price">
              From $136/<span className="unit">person</span>{" "}
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
