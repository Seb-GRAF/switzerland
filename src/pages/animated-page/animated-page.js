import { motion } from "framer-motion";
import React from "react";

const animation = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 1, ease: [0.7, 0, 0.175, 1] },
  },
  exit: { opacity: 0, y: -100 },
};

const AnimatedPage = ({ children, title }) => {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1, ease: [0.7, 0, 0.175, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
