import React from "react";
import star from "../images/star.jpg";

const Card = ({ img, rating, reviewCount, country, title, price }) => {
  return (
    <>
      <div className="card">
        <button className="card-btn">SOLD OUT</button>
        <img
          src={require(`../images/${img}`)}
          alt="swim"
          className="card-img"
        />
        <section className="card-content">
          <div className="row">
            <img src={star} alt="star" className="card-icon" />
            <span className="score">{rating}</span>
            <span className="score review">
              {`(${reviewCount})`} - {country}
            </span>
          </div>
          <div className="row">
            <span className="description">{title}</span>
          </div>
          <div className="row">
            <span className="price">
              From ${price}/<span className="unit">person</span>{" "}
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
