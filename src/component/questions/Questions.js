import React from "react";
import "./Questions.css";
import styled from "styled-components";

const QuestionsComp = styled.div`
  background: linear-gradient(
    121.34deg,
    rgba(228, 228, 228, 0.2) 14.34%,
    rgba(187, 187, 187, 0.2) 71.71%
  );
  padding: 30px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 40px;
  width: 80%;
  height: 30%;
  margin-bottom: 10px;
  .question {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;

    color: #686868;
  }
  .answer {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;

    color: #848484;
  }
  @media screen and (max-width: 802px){
    .answer{
        display: none  }
    
  }
`;

const Questions = () => {
  return (
    <div className=" questionsContainer d-flex flex-column justify-content-center align-items-center">
      <span className="questionHeader"    data-aos="fade-in">Frequently Asked Questiond</span>
      <QuestionsComp    data-aos="zoom-in">
        <span className="question">
          Can I hire testers from Appituneity and integrate them with my team?
        </span>
      </QuestionsComp>
      <QuestionsComp  data-aos="zoom-in">
        <span className="question">What is Software Quality Assurance(QA)</span>
        <span className="answer">
          <br />
          <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </span>
      </QuestionsComp>
      <QuestionsComp  data-aos="zoom-in">
        <span className="question">What is Regression Testing?</span>
      </QuestionsComp>
      <QuestionsComp  data-aos="zoom-in">
        <span className="question">
          What is Usibility Testing?and How Can Help Me?
        </span>
      </QuestionsComp>
    </div>
  );
};

export default Questions;
