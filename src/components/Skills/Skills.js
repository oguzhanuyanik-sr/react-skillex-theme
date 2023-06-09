import "./Skills.css";
import React from "react";
import Heading from "./Heading";
import Steps from "./Steps";
import Numbers from "./Numbers";
import Step1 from "../../images/step1.svg";
import Step2 from "../../images/step2.svg";
import Step3 from "../../images/step3.svg";

function Skills() {
  const skillsText =
    "The modern labor market dictates its own terms. Today, to be a competitive specialist requires more than professional skills.";
  const steps = [
    {
      image: Step1,
      title: "Leadership",
      text: "Fully committed to the success company",
    },
    {
      image: Step2,
      title: "Responsibility",
      text: "Employees will always be my top priority",
    },
    {
      image: Step3,
      title: "Flexibility",
      text: "The ability to switch is an important skill",
    },
  ];
  const numbers = [
    {
      number: 10,
      title: "Years experiences",
    },
    {
      number: 250,
      title: "Types of courses",
    },
  ];

  return (
    <div className="skills-container" id="skills">
      <div className="skills-left-container">
        <Heading>Get the skills you need for a job that is in demand</Heading>
        <ul className="steps-container">
          {steps.map((item, i) => {
            return (
              <>
                <Steps
                  key={"steps-" + i}
                  src={item.image}
                  alt={item.text}
                  title={item.title}
                >
                  {item.text}
                </Steps>
                {i > 0 && (
                  <div
                    key={"dotted-" + i}
                    className={`vertical-dotted dotted-${i}`}
                  >
                    -------------
                  </div>
                )}
              </>
            );
          })}
        </ul>
      </div>
      <div className="skills-right-container">
        <p className="skills-description">{skillsText}</p>
        <div className="numbers-container">
          {numbers.map((item, key) => {
            return (
              <Numbers key={key} number={item.number}>
                {item.title}
              </Numbers>
            );
          })}
        </div>
        <div className="blank-container"></div>
      </div>
    </div>
  );
}

export default Skills;
