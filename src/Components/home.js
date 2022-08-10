import { motion } from "framer-motion";
import Button from "./Helper/button";
import TypeAnimation from "./Helper/typeAnimation";
const Home = () => {
  const parentVarient = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, dealy: 1, staggerChildren: 0.5 },
    },
  };

  const contentMotion = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, staggerChildren: 0.3 },
    },
  };

  return (
    <section
      style={{
        background:
          "linear-gradient(rgb(255, 255, 255, 0), rgb(255, 255, 255, 0)), url(/images/10.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "75% 0",
        backgroundSize: "cover",
      }}
      id="home"
      className="h-screen bg-image relative"
    >
      {/*** overlay ****/}
      <div
        className="absolute top-0 left-0 w-full h-full block lg:hidden"
        style={{ background: "rgba(0,0, 0, 0.75)" }}
      ></div>
      <div className="container px-5 mx-auto flex flex-col justify-center h-full">
        <motion.div
          variants={parentVarient}
          animate="show"
          initial="hidden"
          className="home-content w-full lg:w-4/6 flex-col flex space-y-4"
          style={{ zIndex: "10" }}
        >
          <motion.div
            variants={contentMotion}
            className="flex flex-col space-y-4"
          >
            <motion.h1 className="text-[18px] text-white lg:text-blue lg:text-[26px] leading-[23px] lg:leading-[34px]">
              Hello I'm
            </motion.h1>
            <motion.h2 className="font-bold text-[31px] leading-[37px] lg:text-[70px] lg:leading-[84px] text-white lg:text-blue">
              Tahlia McGrath
            </motion.h2>
            <TypeAnimation />
          </motion.div>
          <motion.div className="discripiton">
            <p className="text-[15px] lg:text-[18px] leading-[30px] text-white lg:text-semiBlack pb-3">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>
          </motion.div>
          <Button text={"see portfolio"} />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
