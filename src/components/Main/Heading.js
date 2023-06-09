import "./Heading.css";
import React from "react";

function Heading(props) {
  return (
    <div className="heading-container">
      <h1 className="categories-heading">{props.children}</h1>
    </div>
  );
}

export default Heading;
