import "./Card.css";
import React, { useState } from "react";

function Card(props) {
  const [hovered, setHovered] = useState(false);
  const cardActive = () => {
    !props.firstItem &&
      document
        .querySelector(".card-container")
        .classList.remove("card-container-active");
    setHovered(true);

    !props.firstItem &&
      document
        .querySelector(".long-title-container")
        .classList.add("display-none");
  };
  const cardDeactive = () => {
    document
      .querySelector(".card-container")
      .classList.add("card-container-active");
    setHovered(false);

    document
      .querySelector(".long-title-container")
      .classList.remove("display-none");
  };

  return (
    <div
      onMouseEnter={cardActive}
      onMouseLeave={cardDeactive}
      className={`card-container${
        hovered || props.firstItem ? " card-container-active" : ""
      }`}
    >
      <img
        className={`card-image${
          hovered || props.firstItem ? " card-image-active" : ""
        }`}
        src={props.src}
        alt={props.title}
      />
      <div
        className={!hovered && !props.firstItem ? "short-title-container" : ""}
      >
        <h2>{props.shortTitle}</h2>
      </div>
      <div
        className={
          hovered || props.firstItem ? "long-title-container" : "display-none"
        }
      >
        <h3 className="long-title-text">
          {props.shortTitle}
          <br />
          {props.title}
        </h3>
        <div className="card-title-container">
          <div className="card-title-number">{props.topics}</div>
          <div className="card-title-topics">TOPICS</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
