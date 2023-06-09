import "./Search.css";
import React from "react";

function Search(props) {
  return (
    <div className="search-container">
      <input className="search-input" type="text" name="" id="" placeholder={props.placeHolder} />
      <input className="search-button" type="submit" value={props.button} />
    </div>
  );
}

export default Search;
