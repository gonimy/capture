import React from "react";
import styled from "styled-components";

import { About } from "../Styles";
import Toggle from "./Toggle";
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
    h4 {
      font-size: 1.5rem;
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
      <Toggle title="How Do I Start?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            reprehenderit perferendis sunt magni dolores ratione.
          </p>
        </div>
      </Toggle>
      <Toggle title="What Products do you offer?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            reprehenderit perferendis sunt magni dolores ratione.
          </p>
        </div>
      </Toggle>
      <Toggle title="Diferrent Payment Methods">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            reprehenderit perferendis sunt magni dolores ratione.
          </p>
        </div>
      </Toggle>
      <Toggle title="Daily Schedule">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            reprehenderit perferendis sunt magni dolores ratione.
          </p>
        </div>
      </Toggle>
    </Faq>
  );
};
