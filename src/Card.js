import React from "react";
const Card = ({cardImage}) => {
  return (
    <div className="card">
      <div className="front">
        <img src={cardImage} alt="" />
      </div>
      <div className="back">
        <p className="description">
          The Montreal Building, <br /> Cleveland
        </p>
        <i className="fas fa-share-alt"></i>
      </div>
    </div>
  );
};

export default Card;
