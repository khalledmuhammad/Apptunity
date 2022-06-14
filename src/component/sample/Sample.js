import React from "react";
import "./Sample.css";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 50vh;
  background: linear-gradient(
    149.47deg,
    rgba(39, 102, 223, 0.9) 5.08%,
    rgba(68, 66, 179, 0.9) 50.65%,
    rgba(95, 39, 179, 0.9) 75.66%
  );
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  margin-top: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Sample = () => {
  return (
    <Container>
      <span data-aos="fade-out" className="left-side d-flex justify-content-center align-items-center">
        Risk free deals allows you to trial <br />
        your team before you hire them
      </span>
      <span data-aos="fade-out" className="right-side d-flex justify-content-center align-items-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut <br/> labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra<br/> maecenas accumsan
        lacus vel facilisis.  
      </span>
    </Container>
  );
};

export default Sample;
