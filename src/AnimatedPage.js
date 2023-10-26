import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedPage = ({ children }) => {
  const controls = useAnimation();
  const [isGlitching, setIsGlitching] = useState(true);

  useEffect(() => {
    if (isGlitching) {
      controls.start({
        opacity: [1, 0, 1, 0, 1],
        transition: { duration: 0.5, ease: "linear" },
      });

      setTimeout(() => {
        setIsGlitching(false);
        controls.start({ opacity: 1 });
      }, 2500); 
    }
  }, [controls, isGlitching]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
