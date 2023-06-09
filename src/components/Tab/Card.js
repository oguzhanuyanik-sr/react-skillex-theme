import "./Card.css";
import React, { useState } from "react";

function Card(props) {
  const [hovered, setHovered] = useState(false);
  const cardActive = () => {
    setHovered(true);
  };
  const cardDeactive = () => {
    setHovered(false);
  };

  return (
    <div
      onMouseEnter={cardActive}
      onMouseLeave={cardDeactive}
      className="tab-card-container"
    >
      <div
        className={`tab-card-icon-container${
          hovered ? " tab-card-icon-hover" : ""
        }`}
      >
        <i className="fa fa-arrow-right"></i>
      </div>
      <div className="tab-card-image-container">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="tab-card-title-container">
        <h3 className={`${hovered ? " tab-card-active" : ""}`}>{props.alt}</h3>
        <div>{props.time} month</div>
      </div>
    </div>
  );
}

export default Card;
