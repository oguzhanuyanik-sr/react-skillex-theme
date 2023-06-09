import "./Heading.css";
import React from "react";

function Heading(props) {
  return (
    <p className="comments-heading">
      {props.children}
      <span className="green-dot">.</span>
    </p>
  );
}

export default Heading;
