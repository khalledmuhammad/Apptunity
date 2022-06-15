import React from "react";
import "./Experience.css";
import side from "../assets/technologies/side.png";

const Experience = () => {
  return (
    <div className="experienceParent">
      <div className="parent">
        <div className=" heading div1" data-aos="fade-in">
          Industry Experience:
        </div>
        <div className=" heading div2" data-aos="fade-in">
          E-Commerce Website & Application
        </div>
        <div className=" content div3" data-aos="fade-in">
          If you want to achieve great success in selling your products, you
          must have an effective e-commerce website & mobile app, and we at
          Appittuneity are one of the best companies that you can rely on for
          our long experience in designing and implementing e-commerce solutions
          for small businesses or even giant commercial establishments, and we
          have many One of the inspiring success stories in the field of
          e-commerce.
        </div>
        <div className="  heading div4" data-aos="fade-in">
          Supporting services for ecommerce websites.
        </div>
        <div className="content  div5" data-aos="fade-in">
          We can help you at Appittuneity by providing additional supporting
          services that make your e-commerce website more effective and more
          accessible, such as e-commerce search engine optimization SEO services
          and relying on various marketing strategy tools, Here are some of
          these supportive services:
        </div>
        <div className=" heading div6" data-aos="fade-in">
          
          E-Learning
        </div>
        <div className=" content div7" data-aos="fade-in">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </div>
      </div>

      <div className="footerExp">
        <span className="footerText" data-aos="fade-out">
          Read more
        </span>
        <img
          src={side}
          alt="sideArrow"
          className="sideArrow"
          data-aos="fade-out"
        />
      </div>
    </div>
  );
};

export default Experience;
