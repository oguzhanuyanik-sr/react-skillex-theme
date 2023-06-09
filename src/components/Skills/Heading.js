import "./Heading.css";
import React from "react";

function Heading(props) {
  return (
    <div className="skills-heading">
      {props.children}
      <span className="green-dot">.</span>
    </div>
  );
}

export default Heading;
