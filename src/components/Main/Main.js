import "./Main.css";
import Hero1 from "../../images/hero1.webp";
import Hero2 from "../../images/hero2.webp";
import Hero3 from "../../images/hero3.webp";
import React from "react";
import Heading from "./Heading";
import Search from "./Search";
import Card from "./Card";

function Categories() {
  const search = {
    placeHolder: "Find your passion",
    button: "Go",
  };
  const card = [
    {
      src: Hero1,
      title: "Course",
      shortTitle: "Writing",
      topics: "100",
    },
    {
      src: Hero2,
      title: "Course",
      shortTitle: "Writing",
      topics: "100",
    },
    {
      src: Hero3,
      title: "Course",
      shortTitle: "Business",
      topics: "100",
    },
  ];

  return (
    <div className="categories-container">
      <Heading>
        Watch.
        <br />
        Learn.
        <br />
        Grow.
      </Heading>
      <Search placeHolder={search.placeHolder} button={search.button} />
      <div className="cards-container">
        {card.map((item, i) => {
          return (
            <Card
              firstItem={!i ? true : false}
              key={i}
              src={item.src}
              title={item.title}
              topics={item.topics}
              shortTitle={item.shortTitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
