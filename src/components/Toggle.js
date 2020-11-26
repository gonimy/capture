import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const StyledToggle = styled(motion.div)`
  cursor: pointer;
  h4 {
    padding: 2rem 0rem;
  }
`;

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <StyledToggle  onClick={() => setToggle(!toggle)}>
      <motion.h4 >{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </StyledToggle>
  );
};

export default Toggle;
