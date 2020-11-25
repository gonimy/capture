import React from "react";

import athlete2 from "../img/athlete2.png";
import theracer from "../img/theracer.png";
import goodtimes2 from "../img/goodtimes2.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Worlk = styled.div`
  min-height: 100vh;
  color: white;
  padding: 5rem 10rem;
  overflow: hidden;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 70vh;
  }
`;

export const OurWork = () => {
  return (
    <Worlk>
      <Movie>
        <h2>The Athlete </h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete2} alt="" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times </h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes2} alt="" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer </h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="" />
        </Link>
      </Movie>
    </Worlk>
  );
};
