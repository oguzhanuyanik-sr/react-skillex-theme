import "./Numbers.css";
import React from "react";

function Numbers(props) {
  return (
    <>
      <div>
        <span className="skills-number">{props.number}</span>
        <p className="skills-text">{props.children}</p>
      </div>
    </>
  );
}

export default Numbers;
