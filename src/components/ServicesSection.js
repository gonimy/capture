import React from "react";
import diaphragm from "../img/diaphragm.svg";
import clock from "../img/clock.svg";
import home2 from "../img/home2.png";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

export const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span>services{" "}
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>We are so Efficient .</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>teamwork </h3>
            </div>
            <p>We are working in teams .</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>diaphragm</h3>
            </div>
            <p>We are so diaphragm .</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="" />
              <h3>money</h3>
            </div>
            <p>We dont take Much .</p>
          </div>
        </div>
      </div>
      <div className="img">
        <img src={home2} alt="" />
      </div>
    </div>
  );
};
