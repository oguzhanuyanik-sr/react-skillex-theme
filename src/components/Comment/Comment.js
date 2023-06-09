import "./Comment.css";
import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import comment1 from "../../images/comment1.webp";
import comment2 from "../../images/comment2.webp";
import comment3 from "../../images/comment3.webp";
import comment4 from "../../images/comment4.webp";
import comment5 from "../../images/comment5.webp";
import comment6 from "../../images/comment6.webp";
import comment7 from "../../images/comment7.webp";

function Comment() {
  const comments = [
    {
      text: "The explanations are clear, the teachers are responsible and friendly, and the homework is real practice",
      src: comment1,
      name: "Rob Zuber",
      job: "CEO",
    },
    {
      text: "I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client",
      src: comment2,
      name: "Melanle Pickett",
      job: "IT Manager",
    },
    {
      text: "I really like the speakers of the course and the quality of the lectures. There is always feedback",
      src: comment3,
      name: "Regis Wilson",
      job: "Engineer",
    },
    {
      text: "A new profession is a lot of vivid impressions. Today I was at the presentation of the regional business award",
      src: comment4,
      name: "Emma Watson",
      job: "Cook",
    },
    {
      text: "The course shows all the stages of the work of an SMM marketer. And also excellent practice",
      src: comment5,
      name: "Emma Watson",
      job: "Cook",
    },
    {
      text: "On the course 'Data Analyst in Python' everything is very interesting and informative, very detailed material",
      src: comment6,
      name: "Chris Hemsworth",
      job: "Analyst",
    },
    {
      text: "For several months I studied one of the most popular programming languages on the course 'Java developer'",
      src: comment7,
      name: "Elizabeth Stone",
      job: "Developer",
    },
  ];

  const [currentTranslate, setCurrentTranslate] = React.useState(0);
  const prevClickHandler = () => {
    currentTranslate < 0 && setCurrentTranslate(currentTranslate + 100);
  };

  const nextClickHandler = () => {
    currentTranslate > -400 && setCurrentTranslate(currentTranslate - 100);
  };

  return (
    <div className="main-carousel-container">
      <Heading>What our customer say</Heading>
      <div className="carousel-container">
        {comments.map((item, i) => {
          return (
            <Card
              key={i}
              src={item.src}
              name={item.name}
              job={item.job}
              style={{ transform: `translate(${currentTranslate}%)` }}
            >
              {item.text}
            </Card>
          );
        })}
      </div>
      <div className="slider-button-container">
        <div onClick={prevClickHandler} className="slider-button">
          <i className="fa fa-arrow-left"></i>
        </div>
        <div onClick={nextClickHandler} className="slider-button">
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Comment;
