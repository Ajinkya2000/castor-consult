import React from "react";
import Buildingimage from "./static/building-image.svg";

class DetailSection extends React.Component {
  render() {
    return (
      <div className="details">
        <div className="detail-content">
          <h2 className="detail-heading">GET WHAT YOU WANT</h2>
          <div className="half-border"></div>
          <img src={Buildingimage} alt="building" className="building-image-top" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            facilis sunt, eius quam soluta doloremque minus suscipit ab
            voluptatibus corporis quisquam adipisci consequatur vero possimus
            atque deleniti consectetur, placeat nostrum!
          </p>
        </div>
        <img src={Buildingimage} alt="building" className="building-image" />
      </div>
    );
  }
}

export default DetailSection;
