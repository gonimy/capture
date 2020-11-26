import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

export const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>working</h1>
    </motion.div>
  );
};
