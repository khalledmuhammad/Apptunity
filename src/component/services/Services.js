import React from "react";
import "./Services.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import AL_ML from "../assets/AL _ML_Modules.png";
import Testing_QA from "../assets/Testing_QA.png";
import Web_Application_Development from "../assets/Web_Application_Development.png";
import DevOps_Engineers from "../assets/DevOps_Engineers.png";
import Dedicated_Devel_pment_Teams from "../assets/Dedicated_Devel_pment_Teams.png";
import Custom_Software_Development from "../assets/Custom_Software_Development.png";
import Creative_Design from "../assets/Creative_Design.png";
import Mobile_App_Development from "../assets/Mobile_App_Development.png";

const ServiceShape = styled.div`
  background: ${(props) => props.color};
  box-shadow: 11px 15px 50px rgba(0, 0, 0, 0.2);
  height: 428px;
  width: 244px;
  border-radius: 35px 35px 200px 35px;
    display: flex;
  flex-direction: column;
  padding : 2%;
  cursor: pointer;
  transition: 0.5s all ease-out;

  text-overflow: ellipsis;
  transform: scale(0.9);
  &:hover {
    transform: scale(1.2);
    transition: 0.5s all ease-out;
  }

  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 23px;
 
    color: #ffffff;

    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  }
  hr {
    height: 1px;
    background-color: #ffff;
    margin-inline: 30px;
    margin-top: 30%;
  }
  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 19px;


    color: #ffffff;

    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    margin-top: 10%;
  }
  img {
    height: 40px;
    width: 40px;
    margin-top:5% ;
    cursor: pointer;
  }
  @media (max-width: 684px) {
    height: 328px;
    width: 144px;
    
    h3 {
      font-size: 0.8em;
      text-align:center ;

    }

    span {
      font-size: 0.5em;
    }
    img {
      height: 20px;
      width: 20px;

    }
  }
  
  @media (max-width: 470px) {
    h3 {
      font-size: 0.6em;
      text-align:center ;
    }
    span {
      font-size: 0.4em;
    }
  }
`;

const Services = () => {
  return (
    <div
      id="services"
      className="service-container justify-content-center align-items-center d-flex flex-column"
    >
      <span className="service-heading" data-aos="fade-in">
       
        our Services{" "}
      </span>
      <div className=" services-top d-flex  flex-row justify-content-around mt-5 ">
        <ServiceShape
          as={motion.div}
          whileHover={{ scale: 1.1  , transition: { duration: 0.1 } }}           whileTap={{ scale: 0.5 }}

          data-aos="fade-in"
          color=" linear-gradient(149.47deg, rgba(39, 102, 223, 0.8) 5.08%, rgba(68, 66, 179, 0.8) 50.65%, rgba(95, 39, 179, 0.8) 75.66%)"
        >
          <h3>Web Application Development</h3>
          <hr />

          <span>
            Our specialized team At Appittuneity builds various
            <br /> web applications such as <br /> administrative, financial
            <br /> and educational <br /> applications,and more.
            <br /> regardless of the size of <br /> you business and the
            <br /> number..
          </span>
          <img
            className="ServiceLogo"
            alt="service logo"
            src={Web_Application_Development}
          />
        </ServiceShape>
        <ServiceShape
        as={motion.div}  whileHover={{ scale: 1.1 , transition: { duration: 0.1 }  }}            whileTap={{ scale: 0.5 }}

          data-aos="fade-in"
          color=" linear-gradient(149.47deg, rgba(20, 170, 105, 0.8) 5.08%, rgba(25, 145, 128, 0.8) 50.65%, rgba(33, 127, 149, 0.8) 75.66%)"
        >
          <h3>Custom Software Development</h3>
          <hr />

          <span>
            To build your next software
            <br /> project and get an optimal <br /> solution in terms of
            performance, security, project cost and scalability for your
            dedicated software, we at Appittuneity
            <br /> have the multifunc..
          </span>
          <img
            className="ServiceLogo"
            alt="service logo"
            src={Custom_Software_Development}
          />
        </ServiceShape>
        <ServiceShape
        as={motion.div}  whileHover={{ scale: 1.1 , transition: { duration: 0.1 }  }}            whileTap={{ scale: 0.5 }}

          data-aos="fade-in"
          color=" linear-gradient(149.47deg, rgba(184, 67, 118, 0.8) 5.08%, rgba(162, 51, 125, 0.8) 50.65%, rgba(137, 31, 127, 0.8) 75.66%)"
        >
          <h3>
            Mobile App <br /> Development
          </h3>
          <hr />

          <span>
            We provide you with comprehensive features and services in your
            mobile applications to increase the
            <br /> levels of communication and engagement with your customers,
            and thus increas..
          </span>
          <img
            className="ServiceLogo"
            alt="service logo"
            src={Mobile_App_Development}
          />
        </ServiceShape>
        <ServiceShape
        as={motion.div}  whileHover={{ scale: 1.1 , transition: { duration: 0.1 }  }}            whileTap={{ scale: 0.5 }}

          data-aos="fade-in"
          color="linear-gradient(166.2deg, rgba(51, 145, 255, 0.8) 5.77%, rgba(62, 151, 255, 0.8) 44.34%, rgba(32, 159, 231, 0.8) 86.27%)"
        >
          <h3>Dedicated Development Teams</h3> <hr />
          <span>
            At Appittuneity, we have
            <br /> dedicated DvOps engineers who are ready to help you build,
            organize and manage your software projects, no matter how huge. We
            believe that automat..
          </span>
          <img
            className="ServiceLogo"
            alt="service logo"
            src={Dedicated_Devel_pment_Teams}
          />
        </ServiceShape>
      </div>
      <div className=" services-bottom  d-flex  flex-row justify-content-around mt-5 ">
        <ServiceShape
        as={motion.div}  whileHover={{ scale: 1.1 , transition: { duration: 0.1 }  }}            whileTap={{ scale: 0.5 }}

          data-aos="fade-in"
          color=" linear-gradient(149.47deg, rgba(39, 102, 223, 0.8) 5.08%, rgba(68, 66, 179, 0.8) 50.65%, rgba(95, 39, 179, 0.8) 75.66%)"
        >
          <h3>DevOps Engineers</h3> <hr />
          <span>
            We believe that automating software development
            <br /> and delivery is the key to success in large and a constantly
            developing project, so our DvOps engineers help you organize your
            project codes in..
          </span>
          <img
            className="ServiceLogo"
            alt="service logo"
            src={DevOps_Engineers}
          />
        </ServiceShape>
        <ServiceShape
        as={motion.div}  whileHover={{ scale: 1.1 , transition: { duration: 0.1 }  }}            whileTap={{ scale: 0.5 }}

          data-aos="fade-in"
          color=" linear-gradient(149.47deg, rgba(20, 170, 105, 0.8) 5.08%, rgba(25, 145, 128, 0.8) 50.65%, rgba(33, 127, 149, 0.8) 75.66%)"
        >
          <h3>Creative Design</h3> <hr />
          <span>
            At Appittuneity, we give great importance to creative design,
            because we believe that a <br /> good design for your website or
            mobile application is able to
            <br /> direct the attention of your customers and website <br />{" "}
            visitors to..
          </span>
          <img
            className="ServiceLogo"
            alt="service logo"
            src={Creative_Design}
          />
        </ServiceShape>
        <ServiceShape
        as={motion.div}  whileHover={{ scale: 1.1 , transition: { duration: 0.1 }  }}            whileTap={{ scale: 0.5 }}

          data-aos="fade-in"
          color=" linear-gradient(149.47deg, rgba(184, 67, 118, 0.8) 5.08%, rgba(162, 51, 125, 0.8) 50.65%, rgba(137, 31, 127, 0.8) 75.66%)"
        >
          <h3>Testing & QA</h3> <hr />
          <span>
            For more than ten years, Appittuneity has built a testing team
            experienced in various industries, So whatever the size
            <br /> of your software project, our <br /> test experts can get to
            the
            <br /> depths of your code in a few
          </span>
          <img className="ServiceLogo" alt="service logo" src={Testing_QA} />
        </ServiceShape>
        <ServiceShape
        as={motion.div}  whileHover={{ scale: 1.1 , transition: { duration: 0.1 }  }}            whileTap={{ scale: 0.5 }}

          data-aos="fade-in"
          color="linear-gradient(166.2deg, rgba(51, 145, 255, 0.8) 5.77%, rgba(62, 151, 255, 0.8) 44.34%, rgba(32, 159, 231, 0.8) 86.27%)"
        >
          <h3>AL ML Modules</h3> <hr />
          <span>
            Lorem Ipsum is simply dummy text of the printing and
            <br /> typesetting industry. Lorem <br /> Ipsum has been the
            industry's standardLorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem..
          </span>
          <img className="ServiceLogo" alt="service logo" src={AL_ML} />
        </ServiceShape>
      </div>
    </div>
  );
};

export default Services;
