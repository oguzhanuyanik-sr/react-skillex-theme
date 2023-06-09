import "./Social.css";
import React from "react";

function Social(props) {
  return (
    <a href="#" className="social-container">
      <i className={props.className}></i>
    </a>
  );
}

export default Social;
