import { motion } from "framer-motion";
import Button from "./Helper/button";
import SocialButton from "./Helper/socialButton";
import TypeAnimation from "./Helper/typeAnimation";
import ArrowAnimation from "./Helper/UpAndDownArrowAnimation";
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
      {/*** Arrow animation ***/}
      <ArrowAnimation />
      {/*** overlay ****/}
      {/*** socal button ***/}
      <SocialButton />
      <div
        className="absolute top-0 duration-150 ease-out left-0 w-full h-full block lg:hidden"
        style={{ background: "rgb(0 0 0 / 69%)" }}
      ></div>
      <div className="lg:container px-5 mx-auto flex flex-col justify-center h-full">
        <motion.div
          variants={parentVarient}
          animate="show"
          initial="hidden"
          className="home-content w-full space-y-3 md:w-[87%] lg:w-4/5 xl:w-4/6 flex-col flex md:space-y-4 md:px-5 xl:space-y-3 xl:px-6 lg:-mt-4"
          style={{ zIndex: "10" }}
        >
          <motion.div
            variants={contentMotion}
            className="flex flex-col space-y-4"
          >
            <motion.h1 className="text-[18px] text-white leading-[23px] lg:text-blue md:text-[26px] md:leading-[34px] lg:text-[26px] lg:font-normal">
              Hello I'm
            </motion.h1>
            <motion.h2 className="font-bold text-white text-[31px] leading-[37px] md:text-[60px] md:leading-[72px] lg:text-[60px] lg:leading-[72px] xl:text-[70px] xl:leading-[84px] lg:text-blue">
              Tahlia McGrath
            </motion.h2>
            <TypeAnimation />
          </motion.div>
          <motion.div className="discripiton">
            <p className="text-[15px] lg:text-[16px] xl:text-[18px] leading-[30px] text-white lg:text-semiBlack pb-3">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>
          </motion.div>
          <Button
            text={"see portfolio"}
            css="text-white md:border-white lg:border-semiBlack lg:text-blue"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
