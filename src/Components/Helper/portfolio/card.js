import { motion } from "framer-motion";
import { useState } from "react";

const staggerChildren = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardMotion = {
  offScreen: {
    opacity: 0,
    x: -55,
  },
  onScreen: {
    opacity: 1,
    x: 0,
    type: "spring",
    stifness: 150,
    damping: 50,
    transition: { duration: 0.8 },
  },
};

const Card = ({ img, title, subTitle }) => {
  const [isHover, setHover] = useState(false);
  const [isInViewPort, setInViewPort] = useState(false);
  const animate =
    isInViewPort === true ? cardMotion.onScreen : cardMotion.offScreen;

  return (
    <motion.div
      onViewportEnter={() => setInViewPort(true)}
      onViewportLeave={() => setInViewPort(false)}
      animate={animate}
      viewport={{ once: false, amount: 0.8 }}
      className="shadow relative overflow-hidden rounded-lg cursor-pointer"
    >
      <motion.img
        initial={{ scale: 1 }}
        animate={{
          scale: isHover ? 1.2 : 1,
          transition: { duration: 0.5 },
        }}
        className="w-full object-cover"
        src={img}
        alt={""}
      />
      <motion.div
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
        }}
        className="overlay flex justify-end px-5 py-5 flex-col bg-[#000000cf] absolute top-0 left-0 w-full h-full "
      >
        <motion.h3
          initial={{ opacity: 0, y: 35 }}
          animate={{
            opacity: isHover === true ? 1 : 0,
            y: isHover === true ? 0 : 35,
            transition: { duration: 0.5 },
          }}
          className="text-ornage font-semibold leading-[29px] text-[22px]"
        >
          {title}
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          animate={{
            opacity: isHover === true ? 1 : 0,
            y: isHover === true ? 0 : 35,
            transition: { duration: 0.5, delay: 0.5 },
          }}
          className="text-white text-base leading-[30px]"
        >
          {subTitle}
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default Card;
