import "./Button.css";
import React from "react";

function Button(props) {
  return (
    <li>
      <a
        className={`nav-link${props.active ? " featured-link" : ""}`}
        href={props.href}
      >
        {props.children}
      </a>
    </li>
  );
}

export default Button;
