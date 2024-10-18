import React from "react";
import { motion, useInView } from "framer-motion";

const AnimatedSection = ({ children, duration = 2, direction = "bottom" }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  let initialPos = {};
  let animatePos = {};

  switch (direction) {
    case "top":
      initialPos = { y: -150 };
      animatePos = { y: inView ? 0 : -50 };
      break;
    case "bottom":
      initialPos = { y: 150 };
      animatePos = { y: inView ? 0 : 50 };
      break;
    case "left":
      initialPos = { x: -150 };
      animatePos = { x: inView ? 0 : -50 };
      break;
    case "right":
      initialPos = { x: 150 };
      animatePos = { x: inView ? 0 : 50 };
      break;
    default:
      initialPos = { y: 150 };
      animatePos = { y: inView ? 0 : 50 };
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialPos }}
      animate={{ opacity: inView ? 1 : 0, ...animatePos }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
