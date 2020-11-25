import React from "react";
import home1 from "../img/home1.png";

export const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We Work To Make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span>dreams</span> come{" "}
            </h2>
          </div>
          <div className="hide">
            <h2>True. </h2>
          </div>
        </div>
        <p>
          Contact us for any Photograpy or videography that you have we have
          professionals with amazing skills
        </p>
        <button>Contact Us</button>
      </div>
      <div className="img">
        <img src={home1} alt="guy with a camera" />
      </div>
    </div>
  );
};
