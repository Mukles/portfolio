import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-scroll";

const GotoTopButton = () => {
  const ref = useRef();
  const [view, setView] = useState(false);

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 490) {
      setView(true);
    } else {
      setView(false);
    }
  });
  return (
    <motion.div
      ref={ref}
      initial={{ x: 100 }}
      animate={{ x: view ? 0 : 100 }}
      transition={{ duration: 1 }}
      className={`${
        view ? " lg:fixed opacity-0 md:opacity-100" : "hidden md:flex"
      } z-10 bg-ornage cursor-pointer w-10 h-10 rounded flex justify-center items-center fixed right-4 bottom-8`}
    >
      <Link className="w-full h-full" to="home" smooth={true}>
        <i className="fa-solid fa-caret-up text-white"></i>
      </Link>
    </motion.div>
  );
};

export default GotoTopButton;
