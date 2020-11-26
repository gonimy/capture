import React from "react";
import { pageAnimation } from "../Animation";
import { AboutSection } from "../components/About.Section";
import { FaqSection } from "../components/FaqSection";
import { ServicesSection } from "../components/ServicesSection";
import { motion } from "framer-motion";

export const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <pageAnimation>
        <AboutSection />
        <ServicesSection />
        <FaqSection />
      </pageAnimation>
    </motion.div>
  );
};
