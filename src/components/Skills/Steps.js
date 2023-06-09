import "./Steps.css";
import React from "react";

function Steps(props) {
  return (
    <li className="steps-item-container">
      <div className="steps-image-container">
        <img src={props.src} alt={props.title} />
      </div>
      <div className="steps-content-container">
        <h4>{props.title}</h4>
        <p>{props.children}</p>
      </div>
    </li>
  );
}

export default Steps;
