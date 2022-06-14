import React from "react";
import Header from "../header/Header";
import "./Home.css";
import BG_LOGO from "../assets/logo-BG.svg";
import RightSide from "./rightside/RightSide";

const Home = () => {
  return (
    <div className="homePage">
      <img className="change-my-color" alt="background logo" src={BG_LOGO} />

      <Header />
      <div className="home-page-content" id="home">
        <div className="home-Left text-white">
          <h3 className="left-heading" data-aos="fade-in">
            We know what you <br /> are looking for
          </h3>
          <p className="left-para" data-aos="fade-out">
            We have +10 years experience working in <br /> Europe
          </p>
        </div>
        <div className="home-Right text-white">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Home;
