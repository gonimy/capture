import React from "react";
import styled from "styled-components";

import { About, Desc, image } from "../Styles";
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    h4{
        font-size:1.5rem;
    }
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
 
  }
`;

export const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Question ? <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do We Started ?</h4>
        <div className="answer">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit{" "}
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How Much We Take ?</h4>
        <div className="answer">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit{" "}
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How Good We Are ?</h4>
        <div className="answer">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit{" "}
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Why US ?</h4>
        <div className="answer">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit{" "}
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};
