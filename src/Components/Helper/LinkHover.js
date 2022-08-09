import { motion } from "framer-motion";
import { useState } from "react";

const LinkHover = ({ text }) => {
  const [isHover, setHover] = useState(false);

  return (
    <motion.span
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="flex flex-col h-5 justify-center items-center text-center overflow-hidden md:text-[16px] md:leading-[23px] capitalize text-xs font-medium"
    >
      <motion.span
        animate={{ y: isHover ? -20 : 11, transition: { duration: 0.3 } }}
        initial={{ opacity: 1, y: 11 }}
        className="md:text-white lg:text-semiBlack"
      >
        {text}
      </motion.span>
      <motion.span
        initial={{ opacity: 1, y: 20 }}
        animate={{
          opacity: 1,
          y: isHover ? -13 : 20,
          transition: { duration: 0.3 },
        }}
        className="text-ornage"
      >
        {text}
      </motion.span>
    </motion.span>
  );
};

export default LinkHover;
