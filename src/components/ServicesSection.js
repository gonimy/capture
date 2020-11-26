import React from "react";
import diaphragm from "../img/diaphragm.svg";
import clock from "../img/clock.svg";
import home2 from "../img/home2.png";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import { About, Desc } from "../Styles";
import styled from "styled-components";

// styled our components

const Services = styled(About)`
  h2 {
    padding-bottom: 3rem;
    font-size: 2.5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }

  @media (max-width: 1500px) {
    display: block;
    padding: 2rem 2rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1500px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 13rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    font-size: 1.2rem;
    color: black;
    padding: 1rem;
  }

  @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ServicesSection = () => {
  return (
    <Services>
      <Desc>
        <h2>
          High <span>quality</span>services{" "}
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>We are so Efficient .</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>teamwork </h3>
            </div>
            <p>We are working in teams .</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>diaphragm</h3>
            </div>
            <p>We are so diaphragm .</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>money</h3>
            </div>
            <p>We dont take Much .</p>
          </Card>
        </Cards>
      </Desc>
      <image>
        <img src={home2} alt="" />
      </image>
    </Services>
  );
};
