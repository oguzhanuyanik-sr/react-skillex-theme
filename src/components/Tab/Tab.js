import "./Tab.css";
import React, { useState } from "react";
import Heading from "./Heading";
import TabItem from "./TabItem";
import Card from "./Card";

import Image1 from "../../images/tab1.webp";
import Image2 from "../../images/tab2.webp";
import Image3 from "../../images/tab3.webp";
import Image4 from "../../images/tab4.webp";

function Tab() {
  const categories = [
    "All categories",
    "Entertainment",
    "Lifestyle",
    "Writing",
    "Business",
    "Food",
  ];
  const cards = [
    {
      image: Image1,
      title: "Sales Marketing",
      time: "4",
      category: "lifestyle",
    },
    {
      image: Image2,
      title: "Data analytics",
      time: "3",
      category: "business",
    },
    {
      image: Image3,
      title: "Copywriting Pro",
      time: "2",
      category: "food",
    },
    {
      image: Image4,
      title: "Design Art",
      time: "4",
      category: "writing",
    },
  ];

  const [data, setData] = useState(cards);

  const handleClick = (arg) => {
    return cards.filter((item) => {
      return item.category === arg;
    });
  };

  return (
    <div className="tab-main-container" id="categories">
      <Heading />
      <ul className="tab-container">
        {categories.map((item, i) => {
          return (
            <TabItem
              key={i}
              id={i}
              handleClick={() =>
                i === 0
                  ? setData(cards)
                  : setData(handleClick((cards[i] || {}).category))
              }
            >
              {item}
            </TabItem>
          );
        })}
      </ul>
      <div className="tab-cards-container">
        {data.map((item, i) => {
          return (
            <Card key={i} src={item.image} alt={item.title} time={item.time} />
          );
        })}
      </div>
    </div>
  );
}

export default Tab;
