import React from "react";

import athlete2 from "../img/athlete2.png";
import theracer from "../img/theracer.png";
import goodtimes2 from "../img/goodtimes2.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fade, lineAnim, pageAnimation } from "../Animation";

const Worlk = styled(motion.div)`
  min-height: 100vh;
  color: white;
  padding: 5rem 10rem;
  overflow: hidden;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1500px) {
    padding: 2rem 2rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
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
    <Worlk variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Movie>
        <motion.h2 variants={fade}> The Athlete </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <img src={athlete2} alt="" />
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}> good times </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes2} alt="" />
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}> The Racer </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="" />
        </Link>
      </Movie>
    </Worlk>
  );
};
