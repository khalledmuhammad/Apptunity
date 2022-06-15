import React from "react";
import styled from "styled-components";
import "./Story.css";
import eye from "../assets/technologies/eye.png";
import smart from "../assets/technologies/smart.png";
import apple from "../assets/technologies/apple.png";
import facebook from "../assets/technologies/facebook.png";
import twitter from "../assets/technologies/twitter.png";
import insta from "../assets/technologies/insta.png";

const StoryCard = styled.div`
  background: linear-gradient(
    121.34deg,
    rgba(158, 158, 158, 0.7) 14.34%,
    rgba(196, 196, 196, 0.7) 71.71%
  );
  box-shadow: 16px 8px 45px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(20px);

  border-radius: 40px;
  cursor: pointer;

  height: 370px;
  width: 250px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-overflow: ellipsis;

  text-align: center;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all  500ms ease-in ;

  &:hover{
    transform: rotateY(360deg)  scale(1.1);

  }

  img {
    height: 90px;
    width: 90px;
    margin-top: 20px;
    transition: all  200ms linear ;
    &:hover{
      transform: scale(1.1) ;
      
    }
  }
  .title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    text-align: center;

    color: #ffffff;
    margin-top: 20px;
  }
  .desc {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 19px;
    text-align: center;
    margin-top: 10px;

    color: #ffffff;
  }
  .social {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 5px;
    img {
      height: 10px;
      width: 10px;
    }
  }
  .button {
    background: linear-gradient(
      149.47deg,
      rgba(39, 102, 223, 0.9) 5.08%,
      rgba(68, 66, 179, 0.9) 50.65%,
      rgba(95, 39, 179, 0.9) 75.66%
    );
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 100px;
    margin-top: 10px ;
    height: 40px ;
    width: 100px ;
    display: flex ;
    justify-content: center ;
      align-items: center ;
    font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 23px;
text-align: center;

color: #FFFFFF;
  }
`;
const StoryBackground = styled.div`
  background: linear-gradient(
    149.47deg,
    rgba(39, 102, 223, 0.9) 5.08%,
    rgba(68, 66, 179, 0.9) 50.65%,
    rgba(95, 39, 179, 0.9) 75.66%
  );
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  width: 90%;
  height: 20vh;
  margin-left: 60px;
  position: absolute;
  margin-top: 170px;
  z-index: -1;
  @media screen and (max-width:702px) {
    display: none ;

  }
`;

const StoryTop = () => {
  return (
    <>
      <div className="StoryTopRow d-flex flex-row align-items-center justify-content-center " data-aos={"fade-in"}>
        <StoryCard
  
        >
          <img src={eye} alt="eye" className="eyeLogo" />
          <h3 className="title">Aye Eye Study</h3>
          <span className="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </span>
          <div className="social">
            <img src={twitter} alt="twitter" className="twitterLogo" />
            <img src={facebook} alt="facebook" className="facebookLogo" />
            <img src={insta} alt="insta" className="instaLogo" />
          </div>
          <div className="button" > Read More
  </div>
        </StoryCard>
        <StoryCard 
        >
          <img src={smart} alt="smart" className="smartLogo" />
          <h3 className="title">My smart home</h3>
          <span className="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </span>
          <div className="social">
            <img src={twitter} alt="twitter" className="twitterLogo" />
            <img src={facebook} alt="facebook" className="facebookLogo" />
            <img src={insta} alt="insta" className="instaLogo" />
          </div>
          <div className="button">    Read More
   </div>
        </StoryCard>
        <StoryCard
        >
          <img src={apple} alt="apple" className="appleLogo" />
          <h3 className="title">Apple</h3>
          <span className="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </span>
          <div className="social">
            <img src={twitter} alt="twitter" className="twitterLogo" />
            <img src={facebook} alt="facebook" className="facebookLogo" />
            <img src={insta} alt="insta" className="instaLogo" />
          </div>
          <div className="button">   Read More
  </div>
        </StoryCard>
      </div>
      <StoryBackground> </StoryBackground>
    </>
  );
};

export default StoryTop;
