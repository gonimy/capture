import React from "react";
import styled from "styled-components";
import home1 from "../img/home1.png";

//styled our components
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 5rem 10rem;
`;
const Desc = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
const image = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export const AboutSection = () => {
  return (
    <About>
      <Desc>
        <div className="title">
          <Hide>
            <h2>We Work To Make</h2>
          </Hide>
          <Hide>
            <h2>
              Your <span>dreams</span> come{" "}
            </h2>
          </Hide>
          <Hide>
            <h2>True. </h2>
          </Hide>
        </div>
        <p>
          Contact us for any Photograpy or videography that you have we have
          professionals with amazing skills
        </p>
        <button>Contact Us</button>
      </Desc>
      <image>
        <img src={home1} alt="guy with a camera" />
      </image>
    </About>
  );
};
