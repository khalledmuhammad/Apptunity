import React from "react";
import "./Story.css";

const StoryBottom = () => {
  return (
    <div className="storyBottomContainer d-flex flex-row   "  data-aos={"fade-in"} >
      <div className="d-flex flex-column flex-grow-1 align-items-center  mt-5 ">
        <span className="headerBottom" >Book a Call </span>
        <span>
          <label className="textBottom mt-4" >name</label>
          <input
            type="name"
            class="form-control"
            id="exampleInputname1"
            aria-describedby="nameHelp"
            placeholder="Enter name"
          />
        </span>
        <span>
          <label className="textBottom" >company</label>
          <input
            type="company"
            class="form-control"
            id="exampleInputcompany1"
            aria-describedby="companyHelp"
            placeholder="Enter company"
          />
        </span>

        <span>
          <label className="textBottom" >email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputemail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </span>
      </div>
      <div className="d-flex flex-column flex-grow-1 align-items-center mt-5 ">
        <textarea class="form-control" rows="6" />
        <div className="btn btn-primary mt-5 " style={{ borderRadius: "40px" ,
      
          background : " linear-gradient(149.47deg, rgba(184, 67, 118, 0.9) 5.08%, rgba(162, 51, 125, 0.9) 50.65%, rgba(137, 31, 127, 0.9) 75.66%)",
          border : "none"
      }}>
          Book a Call
        </div>
      </div>
    </div>
  );
};

export default StoryBottom;
