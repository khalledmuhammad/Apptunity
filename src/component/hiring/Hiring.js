import React from "react";
import "./Hiring.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import Pricing from "../assets/Pricing.png";
import Transparent from "../assets/Transparent.png";
import Customers from "../assets/Customers.png";
import Increased_Productivity from "../assets/Increased_Productivity.png";
import Best_Developers from "../assets/Best_Developers.png";
import Scalable from "../assets/Scalable.png";

const HiringComp = styled.div`
  margin-top: 50px;
  width: 150px;
  height: 300px;
  cursor: pointer;

  mix-blend-mode: overlay;
  border: 0.5px solid #a2baff;
  box-shadow: 12px 11px 60px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .hiringText {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 23px;
    text-align: center;

    color: #ffffff;
  }
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    text-align: center;

    color: #ffffff;
  }
  img {
    margin-bottom: 10px;
    width: 60px;
    height: 60px;
  }
  &:hover {
    border: 1px white solid;
    mix-blend-mode: normal;
  }
`;

const Hiring = () => {
  return (
    <div
      className="hiringContainer mt-5 d-flex flex-column align-items-center"
      id="hiring"
    >
      <span className="hiringText" data-aos="fade-in">
        Why hiring Dedicated Teams
      </span>
      <div className="hiringCard  d-flex flex-row ">
        <HiringComp
          data-aos="fade-in"
          as={motion.div}
          whileHover={{ y: -20, transition: { duration: 0.2 } }}
          
        >
          <img src={Scalable} alt="Scalable" className="hiring" />

          <span>Highly Flexible And Scalable</span>
        </HiringComp>
        <HiringComp
         data-aos="fade-in"
          as={motion.div}
          whileHover={{ y: -20, transition: { duration: 0.2 } }}
        >
          <img src={Best_Developers} alt="Best_Developers" className="hiring" />
          <span>Get The Best Developers</span>
        </HiringComp>
        <HiringComp
         data-aos="fade-in"
          as={motion.div}
          whileHover={{ y: -20, transition: { duration: 0.2 } }}
        >
          <img
            src={Increased_Productivity}
            alt="Increased_Productivity"
            className="hiring"
          />

          <span>Increased Productivity</span>
        </HiringComp>
        <HiringComp
         data-aos="fade-in"
          as={motion.div}
          whileHover={{ y: -20, transition: { duration: 0.2 } }}
        >
          <img src={Customers} alt="Customers" className="hiring" />

          <span>
            Customers Are
            <br /> At The Center <br /> Of Focuss
          </span>
        </HiringComp>
        <HiringComp
         data-aos="fade-in"
          as={motion.div}
          whileHover={{ y: -20, transition: { duration: 0.2 } }}
        >
          <img src={Transparent} alt="Transparent" className="hiring" />

          <span>Transparent Management</span>
        </HiringComp>
        <HiringComp
         data-aos="fade-in"
          as={motion.div}
          whileHover={{ y: -20, transition: { duration: 0.2 } }}
        >
          <img src={Pricing} alt="Pricing" className="hiring" />

          <span>Fair Pricing</span>
        </HiringComp>
      </div>
      <span className="footerHiring"  data-aos="fade-in">
        Regardless of the size of your project, you are the one who initially
        decides how many specialists developers you need to hire on the project.
        You can always add new developers to your team or reduce the team as
        necessary.It is all done quickly and without any side cost.
      </span>
    </div>
  );
};

export default Hiring;
