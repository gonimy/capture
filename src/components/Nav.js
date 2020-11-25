import React from "react";
import {StyledNav} from "../Styles";

export const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo">Capture </a>
      </h1>
      <ul>
        <li>
          <a href="#"> 1. About Us</a>
        </li>
        <li>
          <a href="#">2. Our Work </a>
        </li>
        <li>
          <a href="#">3. Contact Us </a>
        </li>
      </ul>
    </StyledNav>
  );
};
