import React from "react";
import Card from "./Card";
import card1 from './static/card-image-1.jpg'
import card2 from './static/card-image-2.jpg'
import card3 from './static/card-image-3.jpg'
import card4 from './static/card-image-4.jpg'
import card5 from './static/card-image-5.jpg'
import card6 from './static/card-image-6.jpg'

const CardSection = () => {
  return (
    <div className="card-wrapper">
      <div className="project">
        <h2>Our Projects</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ab
          illo? Odio omnis blanditiis non quos
        </p>
      </div>
      <div className="card-section">
        <div className="cards">
          <Card cardImage={card1}/>
          <Card cardImage={card2}/>
          <Card cardImage={card3}/>
          <Card cardImage={card4}/>
          <Card cardImage={card5}/>
          <Card cardImage={card6}/>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
