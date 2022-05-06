import React from "react";
import star from "../images/star.jpg";
import data from "../Data"

const Card = () => {
  return (
    <>
      {data.map((element) => {
        return (
          <div className="card">
          <button className="card-btn">{element.openSpots === 0 ? "Sold Out" : "Book Now"}</button>
          <img
            src={require(`../images/${element.coverImg}`)}
            alt="swim"
            className="card-img"
          />
            <section className="card-content">
              <div className="row">
                <img src={star} alt="star" className="card-icon" />
                <span className="score">{element.stats.rating}</span>
                <span className="score review">
                  {`(${element.stats.reviewCount})`} - {element.location}
                </span>
              </div>
              <div className="row">
                <span className="description">{element.title}</span>
              </div>
              <div className="row">
                <span className="price">
                  From ${element.price}/<span className="unit">person</span>{" "}
                </span>
              </div>
            </section>
          </div>
        )
      })}
      
    </>
  );
};

export default Card;
