import React from "react";
import home1 from "../img/home1.png";

import { motion } from "framer-motion";

//styled our components
import { About, Desc, Image, Hide } from "../Styles";
import { photoAnimate } from "../Animation";
import { Wave } from "./Wave";

export const AboutSection = () => {
  //write the animation obj to use in title to transition it after 3sec
  const titleAnimate = {
    show: { x: 0, transition: { duration: 1, ease: "easeOut" } },
    hidden: { x: 200 },
  };

  return (
    <About>
      <Desc>
        <motion.div
          className="title"
          variants={titleAnimate}
          animate="show"
          initial="hidden"
        >
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
        </motion.div>
        <p>
          Contact us for any Photograpy or videography that you have we have
          professionals with amazing skills
        </p>
        <button>Contact Us</button>
      </Desc>
      <Image>
        <motion.img
          variants={photoAnimate}
          src={home1}
          alt="guy with a camera"
        />
      </Image>
      <Wave />
    </About>
  );
};
