import React from "react";
import "./Quality.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import Arrow from "../assets/arrow_21.png"


const QualityShape = styled.div`
  background: #ffffff;
  box-shadow: 8px 7px 40px rgba(0, 0, 0, 0.15);
cursor: pointer;
  border-radius: 50px;
  height: 279px;
  width: 300px;
  display: flex;
  flex-direction: column;

  
  text-align: center;
  .cardHeader {
    width: 100%;
    background: ${(props) => props.color};
    height: 50px  ;
    border-radius: 50px 50px 0px 0px;
    h3{
      text-align: center ;
      background:${(props) => props.color};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2em ;

    }
  }
  .desc {
    margin: 40px 40px 0 40px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
    line-height: 19px;

    color: #000000;
  }

  .btm-text {
    font-family: "Italiana";
    font-style: normal;
    font-weight: 400;
    font-size: 0.9em;
    line-height: 28px;
    margin: 0 40px 0 40px;

    color: #000000;
  }
  @media screen and (max-width:505px){
   
    .desc {
    margin: 10px 40px 0 40px;
    text-align:center ;
 
    font-size: 1em;
   
  }

  .btm-text {
 
    font-size: 0.7em;
    margin: 0 40px 0 40px;
    text-align:center ;


    color: #000000;
  }

    
  }
  @media screen and (max-width:473px){
    

    .desc {
   
 
    font-size: 0.7em;
    margin:  0;

  }

  .btm-text {
 
    font-size: 0.5em;
    margin: 0 ;
   


  }
  }
`;
const Quality = () => {
  return (
    <div className="qualityContainer" id="skills">
      <div className="qualityColumn d-flex flex-row justify-content-around align-items-center">
       
      </div>

      <div className="qualiityRow  d-flex flex-row justify-content-around align-items-center ">
        <QualityShape
          as={motion.div}
          whileHover={{ scale: 1.1  , transition: { duration: 0.1 } }}     whileTap={{ scale: 0.5 }}

          data-aos="fade-in"
          color={
            "linear-gradient(149.47deg, rgba(184, 67, 118, 0.8) 5.08%, rgba(162, 51, 125, 0.8) 50.65%, rgba(137, 31, 127, 0.8) 75.66%)"
          }
          shadow={"box-shadow: 11px 15px 50px rgba(0, 0, 0, 0.2);"}
        >
          <span className="cardHeader">            <h3>1</h3>
</span>
          <span className="desc">
            We at Appittuneity provide you with highly trained developers and
            testers, and enable you to interview and test them to choose.. More
          </span>
          <span className="btm-text"> Choose Testers and Developers</span>
        </QualityShape>
        <QualityShape
         as={motion.div}
         whileHover={{   rotate:   360  , transition: { duration: 0.1 } }}     whileTap={{ scale: 0.5 }}

         data-aos="fade-in"
          color={
            "linear-gradient(149.47deg, rgba(20, 170, 105, 0.8) 5.08%, rgba(25, 145, 128, 0.8) 50.65%, rgba(33, 127, 149, 0.8) 75.66%)"
          }
          shadow={"box-shadow: 11px 15px 50px rgba(0, 0, 0, 0.2);"}
        >
          <span className="cardHeader">
            <h3>2</h3>
          </span>
          <span className="desc">
            Since our professional testers have a long experience working with
            all testing techniques and procedures in various projects and.. More
          </span>
          <span className="btm-text">
            Integrate The Testers Team With Your Team.
          </span>
        </QualityShape>
        <QualityShape
         as={motion.div}
         whileHover={{ scale: 1.1  , transition: { duration: 0.1 } }}     whileTap={{ scale: 0.5 }}

         data-aos="fade-in"
          color={
            "linear-gradient(166.2deg, rgba(51, 145, 255, 0.8) 5.77%, rgba(62, 151, 255, 0.8) 44.34%, rgba(32, 159, 231, 0.8) 86.27%)"
          }
          shadow={"box-shadow: 11px 15px 50px rgba(0, 0, 0, 0.2);"}
        >
          <span className="cardHeader">
          <h3>3</h3>

          </span>
          <span className="desc">
            At Appittuneity, we provide you with the most flexible hiring model,
            where you can increase or decrease the number of testers and.. More
          </span>
          <span className="btm-text"> Increase or Decrease The Number Of Testers</span>
        </QualityShape>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-5">
                  <img src={Arrow} alt="arrow" className="arrowLogo" data-aos="fade-in"  />
                  <h6 className="mt-5" style={{color: "#848484" , textAlign:"center"}} data-aos="fade-in" >Only when you approve the quality. We are sure we will
</h6>
</div>
    </div>
  );
};

export default Quality;
