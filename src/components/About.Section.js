import React from "react";
import home1 from "../img/home1.png";

//styled our components
import { About, Desc, image, Hide } from "../Styles";

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
