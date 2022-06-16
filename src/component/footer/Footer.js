import React from "react";
import "./Footer.css";
const Home = [
  "Our Services",
  "How to Build Your Own Testing Team at Appittuneity?",
  "  Why Choose appituneity?",
  "  Frequently Asked Questiond",
  "  Why hiring Dedicated  Teams",
  "  Some Of our Frequently used technologies",
  "  Industry Experience",
  " Partners and Success story",

  "  Book a Call ",
];
const Services = [
  "Bespoke Software",
  "Hire Developers",
  " Cloud Computing",
  " Creative Design",
  " DevOps Engineers",
  " Dedicated Development Teams",
  "  Mobile App Development",
  "  Custom Software Development",
  " AL ML Modules",
  " Web Application Development",
  " Testing & QA ",
];
const skills = [
  "Angular ",
  "drupal",
  "elixir",
  "magento",
  " Microsoft.NET",
  " node-js",
  "php",
  "Python",
  "Rails",
  "React",
  "WooCommerce",
  "WordPress",
];
const industries = [" e-commerce", " e-Learning", " health cear"];
const blog = [
  "  Quick Links ",
  "Profile",
  "Corporate Social",
  "Responsinility",
  "How We Work",
  "Blog",
  "Careers",
  "Products",
];
const hiring = [
  "Web Application Development",
  "Custom Software Development",
  "Mobile App Development",
  "Dedicted Development Teams",
  "DevOps",
  "Creative Design",
];

const Footer = () => {
  return (
    <div className="footer d-flex flex-column justify-content-around ">
      <div className=" rowContainer d-flex flex-row ">
        <span className="d-flex flex-column ">
          <h3>names</h3>
          <hr />
          {Home.map((el) => {
            return (
              <>
                <span> {el} </span>
              </>
            );
          })}
        </span>
        <span className="d-flex flex-column">
          <h3>SERVICES</h3>
          <hr />
          {Services.map((el) => {
            return <span> {el} </span>;
          })}
        </span>
        <span className="d-flex flex-column">
          <h3>SKILLS</h3>
          <hr />

          {skills.map((el) => {
            return <span> {el} </span>;
          })}
        </span>
      </div>
      {/* first content done ---------------------------------------------------------------------------- */}

      <div className=" rowContainerSec d-flex flex-row ">
        <span className="d-flex flex-column ">
          <h3>INDUSTRIES</h3>
          <hr />
          {industries.map((el) => {
            return (
              <>
                <span> {el} </span>
              </>
            );
          })}
        </span>
        <span className="d-flex flex-column">
          <h3>BLOGS</h3>
          <hr />
          {blog.map((el) => {
            return <span> {el} </span>;
          })}
        </span>
        <span className="d-flex flex-column">
          <h3>WE ARE HIRING</h3>
          <hr />

          {hiring.map((el) => {
            return <span> {el} </span>;
          })}
        </span>
      </div>

      <div className=" d-flex flex-row w-100  justify-content-center btm-footer mt-5">
        <hr className="w-50" />
        <h3 className="w-50 text-center" > Copyright 2022 appituneity - All rights reserved.</h3>
        <hr className="w-50" />
      </div>
    </div>
  );
};

export default Footer;
