import { motion } from "framer-motion";
import { Link } from "react-scroll";

const arrowMotion = {
  show: {
    opacity: [1, 0, 1],
    dealy: 3,
    y: [-20, 0, -20],
  },
  hidden: { opacity: 0, y: 0 },
};

const ArrowAnimation = () => {
  return (
    <motion.div
      style={{ zIndex: 100000 }}
      to="about"
      variants={arrowMotion}
      initial={"hidden"}
      animate={"show"}
      transition={{
        ease: [0.17, 0.67, 0.83, 0.67],
        repeat: Infinity,
        duration: 2.2,
      }}
      className="w-8 h-8 cursor-pointer rounded-full bottom-12 left-[40%] sm:left-1/2 z-50 bg-ornage absolute flex justify-center items-center"
    >
      <Link
        className="md:flex  w-full h-full hidden justify-center items-center"
        to="about"
        smooth={true}
        offset={-83}
      >
        <i className="fa-solid fa-angle-down text-white"></i>
      </Link>
      <Link
        className="md:hidden w-full h-full flex justify-center items-center"
        to="about"
        smooth={true}
      >
        <i className="fa-solid fa-angle-down text-white"></i>
      </Link>
    </motion.div>
  );
};

export default ArrowAnimation;
