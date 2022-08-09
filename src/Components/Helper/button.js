import { motion } from "framer-motion";
import { useState } from "react";

const Buton = ({ text, css, white }) => {
  const [isHover, setHover] = useState(false);
  return (
    <motion.button
      onHoverStart={() => setHover(true)}
      onHoverEnd={(e) => setHover(false)}
      style={{
        marginTop: css ? css.margin : null,
        borderColor: isHover
          ? "#f52225"
          : css
          ? css.background
          : white
          ? "white"
          : "#6e6e6e",
        background: css ? css.background : null,
        color: white ? "white" : "#f52225",
      }}
      className="flex flex-col h-12 justify-center items-center text-center border-2 overflow-hidden w-[140px] py-3 rounded text-base leading-[30px] lg:text-lg mt-4 capitalize"
    >
      <motion.span
        initial={{ opacity: 1, y: 10 }}
        animate={{ y: isHover ? -20 : 15 }}
        style={{ color: css ? css.color : null }}
        className="text-semiBlack"
      >
        {text}
      </motion.span>
      <motion.span
        style={{
          color: css ? css.color : null,
          border: css ? ` 1px solid ${css.background}` : null,
        }}
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
