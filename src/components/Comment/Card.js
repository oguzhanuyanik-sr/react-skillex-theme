import "./Card.css";
import React from "react";

function Card(props) {
  return (
    <div className="comment-card-container" style={props.style}>
      <p className="comment-text">{props.children}</p>
      <div className="comment-user-container">
        <img className="comment-image" src={props.src} alt={props.children} />
        <div className="user-description">
          <span className="comment-name">{props.name}</span>
          <span className="comment-job">{props.job}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
