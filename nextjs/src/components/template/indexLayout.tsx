import * as React from "react";
import { motion } from "framer-motion";
import { variants } from "styles/motion";

const IndexLayout: React.FC = ({ children }) => {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
    >
      {children}
    </motion.main>
  );
};

export default IndexLayout;
