import React from "react";
import "./Tech.css";
import Angular from "../assets/technologies/Angular.png";
import drupal from "../assets/technologies/drupal.png";
import elixir from "../assets/technologies/elixir.png";
import magento from "../assets/technologies/magento.png";
import Microsoft from "../assets/technologies/Microsoft.NET.png";
import nodeJs from "../assets/technologies/node-js.png";
import php from "../assets/technologies/php.png";
import Python from "../assets/technologies/Python.png";
import Rails from "../assets/technologies/Rails.png";
import ReactJs from "../assets/technologies/React.png";
import WooCommerce from "../assets/technologies/WooCommerce.png";
import WordPress from "../assets/technologies/WordPress.png";
import { motion } from "framer-motion";

let images = [
  Angular,
  drupal,
  elixir,
  magento,
  Microsoft,
  nodeJs,
  php,
  Python,
  Rails,
  ReactJs,
  WooCommerce,
  WordPress,
];
const Tech = () => {
  return (
    <div className="techContainer d-flex flex-column justify-content-center align-items-center w-100">
      <div className="TechHeader" data-aos={"fade-in-out"} >Some Of our Frequently used technologies</div>
      <div className="d-flex flex-row justify-content-between flex-wrap align-items-center">
        {images.map((image) => {
          return <motion.img src={image} alt={image} data-aos={"fade-in-out"}   whileHover={{ scale: 1.4, transition: { duration: 0.1 } }}  className="techImage" />;
        })}
      </div>
      <div className="TechText"  data-aos={"fade-in-out"} >
        <b> Hire php developer,</b> dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
      </div>
      <div className="  Developers d-flex flex-row  justify-content-around  w-50"  >
        <span style={{ color: "#989898" }}>FrontEnd</span>
        <span style={{ color: "#E6E6E6" }}>BackEnd</span>
        <span style={{ color: "#E6E6E6" }}>AI & ML</span>
      </div>
    </div>
  );
};

export default Tech;
