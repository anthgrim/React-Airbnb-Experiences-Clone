import React from "react";
import star from "../images/star.jpg";
import data from "../Data"

const Card = (props) => {
  const { img, rating, reviewCount, location, title, price, openSpots } = props
  return (
    <>
      <div className="card">
        <button className="card-btn">{openSpots === 0 ? "Sold Out" : "Book Now"}</button>
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
                {`(${reviewCount})`} - {location}
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
