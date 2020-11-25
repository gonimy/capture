import React from "react";
import { StyledNav } from "../Styles";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          Capture{" "}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">  About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work </Link>
        </li>
        <li>
          <Link to="/contact"> Contact Us </Link>
        </li>
      </ul>
    </StyledNav>
  );
};
