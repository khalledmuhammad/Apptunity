import React from "react";
import "./Industry.css";
import styled from "styled-components";
import planning from "../assets/planning.png";
import Cumulative from "../assets/Cumulative.png";
import operational_capability from "../assets/operational_capability.png";
import experience from "../assets/experience.png";

const IndustyComp = styled.div`
  margin-top: 50px;
  width: 200px;
  height: 300px;
  cursor: pointer;

  background: linear-gradient(255.37deg, #000000 14.38%, #262626 67.97%);
  box-shadow: 12px 11px 60px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-out ;
  &:hover{
    transform: scale(1.1) ;
  }
  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 23px;
    text-align: center;

    color: #ffffff;
  }
  img {
    margin-bottom: 10px;
    mix-blend-mode: overlay;
    width: 80px;
    height: 80px;
  }
`;
const IndustryCompSec = styled.div`
  margin-top: 50px;
  width: 200px;
  height: 300px;
  cursor: pointer;


  background: linear-gradient(255.37deg, #000000 14.38%, #262626 67.97%);
  box-shadow: 12px 11px 60px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  transition: all 200ms ease-out ;
  &:hover{
    transform: scale(1.1) ;
  }
  .header {

    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 23px;

    color: #ffffff;
  }
  img {
    margin-bottom: 10px;
    mix-blend-mode: overlay;
    width: 40px;
    height: 40px;
    margin-right:10px ;
    
  } 
   .body{
    font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 10px;
line-height: 16px;
margin-top: 20px;

color: #848484;
   }
`;

export const Industry = () => {
  return (
    <div
      className="industryContainer mt-5 d-flex flex-column align-items-center"
      id="industries"
    >
      <span className="industryText" data-aos="fade-in" >Why Choose appituneity?</span>
      <div className="industryCard d-flex flex-row ">
        <IndustyComp data-aos="flip-left">
          <img src={planning} alt="planning" className="industimg" />
          <span>Planning and clarity of strategies</span>
        </IndustyComp>
        <IndustryCompSec data-aos="flip-left">
          <div className="d-flex flex-row mt-4  " >
            <img
              src={operational_capability}
              alt="operational_capability"
              className="industimg"
            />
            <span className="header">Our software <br/> has  strong <br/>  operational<br/> capability</span>
          </div>
          <span className="body">
            We have more than 10 years of <br/> experience in building mobile <br/>and web
            applications so that<br/> they integrate with the most <br/>common software
            systems <br/>such as ERP, CRM, and our <br/>software easily deals with<br/> cloud
            computing.
          </span>
        </IndustryCompSec>
        <IndustyComp data-aos="flip-right">
          <img src={Cumulative} alt="Cumulative" className="industimg" />
          <span>
            Cumulative experience enables fast implementation and lower cost
          </span>
        </IndustyComp>
        <IndustyComp data-aos="flip-right">
          <img src={experience} alt="experience" className="industimg" />
          <span>Long experience in industries</span>
        </IndustyComp>
      </div>
    </div>
  );
};
