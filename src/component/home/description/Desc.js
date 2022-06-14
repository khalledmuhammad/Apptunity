import React from "react";
import "./Desc.css" ;
import Logo from "../../assets/logo-colorful.svg"

const Desc = () => {
  return (
   
    <div className="FullContainer">
    <div className=" descContainer">
      <div className="left-side" data-aos="slide-right">
        We have a talented team of professional <br/> web designers, developers, and
        project <br/> managers worked in a harmonious <br/> manner To achieve the best
        results on <br/> your bussiness at a resonable cost.
      </div>
      <div className="right-side" data-aos="fade-in">
        Our team works in an agile/Scrum methodolgy, so every detail of your
        requirements is recorded in the user story, and implementation
        priorities are determined according to the priorities of your work, and
        this is discussed at each product cycle, which means we will achieve
        everything you looking forward to it with the highest quality standards.
      </div>
     
    </div>
  <div className="logo-bottom">
  <img className="bottomLogo" alt="app logo"    src={Logo} />

  </div>

  
   </div>
  );
};

export default Desc;
