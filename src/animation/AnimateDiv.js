import React from "react";
import "./animation.css";
import { motion } from "framer-motion";

function AnimateDiv() {
  return (
    <>
      <div className="Outdiv">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ x: 100, scale: 1 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          className="inrDiv"
        >
          <h1>Animate</h1>
        </motion.div>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          click me
        </motion.button>
      </div>
    </>
  );
}

export default AnimateDiv;
