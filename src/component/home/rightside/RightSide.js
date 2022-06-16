import styled from "styled-components";
import React from "react";
import "./RightSide.css";
import { motion } from "framer-motion";

const RightSideShape = styled.div`
  background: ${(props) => props.color};
  box-shadow: 11px 15px 50px rgba(0, 0, 0, 0.2);
  height: 400px;
  width: 244px;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  margin-left: auto;
  margin-right: auto;

  overflow: hidden;
  text-overflow: ellipsis;

  text-align: center;
  border-radius: 35px 35px 200px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  position: absolute;
  transition: all 1s linear;
  &:hover {
    z-index: 1;
    cursor: pointer;

    span {
      visibility: visible;
      opacity: 1;
      margin-top: 25%;
    }
  }
  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 23px;

    color: #ffffff;

    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  }
  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;

    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);

    top: 40px;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
  }

  @media screen and (max-width: 1273px) {
    margin-top: 10px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    text-align: center;
    position: relative;
  }
  @media (max-width: 990px) {
    h3 {
      font-size: 1em;
    }
    span {
      font-size: 0.8em;
      margin-top: 2%;
    }
  }

  @media (max-width: 684px) {
    height: 328px;
    width: 144px;
    flex-wrap: wrap;
    h3 {
      font-size: 0.8em;
    }
    span {
      font-size: 0.5em;
      left: 2px;
      top: 10px;
    }
  }
  @media (max-width: 464px) {
    h3 {
      font-size: 0.6em;
    }
    span {
      font-size: 0.4em;
      margin-top: 2%;
    }
  }
  @media (max-width: 385px) {
    h3 {
      font-size: 0.6em;
    }
    span {
      font-size: 0.3em;
      margin-top: 2%;
      align-self: center;
    }
  }
`;

const RightSide = () => {
  return (
    <div className="container">
      <div className="leftSide">
        <div data-aos="slide-right" className="shape1"></div>
        <div className="shape2">
          <p>CONTACT US</p>
        </div>
      </div>
      <div className="rightSide">
        <RightSideShape
          as={motion.div}
          whileHover={{ scale: 1.05, transition: { duration: 0.01 } }}
          whileTap={{ scale: 0.5 }}
          top={"0.1%"}
          bottom={"93.7%"}
          left={"72.08%"}
          right={"10.97%"}
          color={
            " linear-gradient(149.47deg, rgba(170, 146, 19, 0.9) 5.08%, rgba(175, 107, 25, 0.9) 50.65%, rgba(175, 76, 27, 0.9) 75.66%)"
          }
        >
          <h3>Dedicated Development Teams</h3>
          <span>
            Our specialized team At Appittuneity builds various <br /> web
            applications such as
            <br /> administrative, financial
            <br /> and educational <br />
            applications,and more.
            <br />
            regardless of the size of
            <br /> you business and the number..
          </span>
        </RightSideShape>
        <RightSideShape
            as={motion.div}
            whileHover={{ scale: 1.05, transition: { duration: 0.01 } }}
            whileTap={{ scale: 0.5 }}
          top={"12%"}
          bottom={"92.84%"}
          left={"72.64%"}
          right={"10.42%"}
          color={
            " linear-gradient(149.47deg, rgba(184, 67, 118, 0.8) 5.08%, rgba(162, 51, 125, 0.8) 50.65%, rgba(137, 31, 127, 0.8) 75.66%)"
          }
        >
          <h3>Mobile App Development</h3>
          <span>
            Our specialized team At Appittuneity builds various <br /> web
            applications such as
            <br /> administrative, financial
            <br /> and educational <br />
            applications,and more.
            <br />
            regardless of the size of
            <br /> you business and the number..
          </span>
        </RightSideShape>
        <RightSideShape
            as={motion.div}
            whileHover={{ scale: 1.05, transition: { duration: 0.01 } }}
            whileTap={{ scale: 0.5 }}
          top={"24%"}
          bottom={"92%"}
          left={"73.19%"}
          right={"9.86%"}
          color={
            "linear-gradient(149.47deg, rgba(20, 170, 105, 0.8) 5.08%, rgba(25, 145, 128, 0.8) 50.65%, rgba(33, 127, 149, 0.8) 75.66%)"
          }
        >
          <h3>Custom Software Development</h3>
          <span>
            Our specialized team At Appittuneity builds various <br /> web
            applications such as
            <br /> administrative, financial
            <br /> and educational <br />
            applications,and more.
            <br />
            regardless of the size of
            <br /> you business and the number..
          </span>
        </RightSideShape>
        <RightSideShape
            as={motion.div}
            whileHover={{ scale: 1.05, transition: { duration: 0.01 } }}
            whileTap={{ scale: 0.5 }}
          top={"36%"}
          bottom={"91.1%"}
          left={"73.89%"}
          right={"9.17%"}
          color={
            "linear-gradient(149.47deg, rgba(39, 102, 223, 0.8) 5.08%, rgba(68, 66, 179, 0.8) 50.65%, rgba(95, 39, 179, 0.8) 75.66%)"
          }
        >
          <h3>Web Application Development</h3>
          <span>
            Our specialized team At Appittuneity builds various <br /> web
            applications such as
            <br /> administrative, financial
            <br /> and educational <br />
            applications,and more.
            <br />
            regardless of the size of
            <br /> you business and the number..
          </span>
        </RightSideShape>
      </div>
    </div>
  );
};

export default RightSide;
