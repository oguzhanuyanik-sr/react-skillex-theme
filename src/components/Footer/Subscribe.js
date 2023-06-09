import "./Subscribe.css";
import React from "react";

function Subscribe(props) {
  return (
    <div className="subscribe-container">
      <input
        className="subscribe-input"
        type="text"
        name=""
        id=""
        placeholder={props.placeHolder}
      />
      <input className="subscribe-button" type="submit" value={props.button} />
    </div>
  );
}

export default Subscribe;
