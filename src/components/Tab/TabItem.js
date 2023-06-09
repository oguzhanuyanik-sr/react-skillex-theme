import "./TabItem.css";
import React from "react";

function TabItem(props) {
  const items = document.querySelectorAll(".tab-item");

  items.forEach((item) => {
    item.addEventListener("click", function () {
      items.forEach((a) => {
        a.classList.remove("tab-item-active");
      });
      item.classList.add("tab-item-active");
    });
  });

  return (
    <li
      onClick={props.handleClick}
      className={`tab-item${props.id === 0 ? " tab-item-active" : ""}`}
    >
      {props.children}
    </li>
  );
}

export default TabItem;
