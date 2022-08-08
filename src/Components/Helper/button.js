import { motion } from "framer-motion";
import { useState } from "react";

const Buton = ({ text }) => {
  const [isHover, setHover] = useState(false);
  return (
    <motion.button
      onHoverStart={() => setHover(true)}
      onHoverEnd={(e) => setHover(false)}
      style={{ borderColor: isHover ? "#f52225" : "#6e6e6e" }}
      className="flex flex-col h-14 justify-center items-center text-center border-2 overflow-hidden w-[176px] py-3 rounded text-base leading-[30px] lg:text-lg mt-4 capitalize"
    >
      <motion.span
        initial={{ opacity: 1, y: 12 }}
        animate={{ y: isHover ? -20 : 12 }}
        className="text-semiBlack"
      >
        {text}
      </motion.span>
      <motion.span
        initial={{ opacity: 1, y: 20 }}
        animate={{ opacity: 1, y: isHover ? -15 : 20 }}
        className="text-ornage"
      >
        {text}
      </motion.span>
    </motion.button>
  );
};

export default Buton;
