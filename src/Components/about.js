import { motion } from "framer-motion";
import Experience from "./experience";
import Button from "./Helper/button";
import GotoTopButton from "./Helper/GotoTopButton";
import Title from "./Helper/title";
import { about } from "./utilities/about";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-[#F9F9FC]"
      transition={{ staggerChildren: 0.5 }}
    >
      {/***Goto Button ***/}
      <GotoTopButton />
      <motion.div className="lg:container mx-auto px-5 md:px-8 pb-16">
        <Title
          title={"about me"}
          header={"about me"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
          }
        />
        <div className="flex flex-col  xl:flex-row items-center lg:space-x-0 xl:space-x-24">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            src="/images/9.jpg"
            alt=""
            className="rounded-lg lg:auto h-auto w-full md:h-[40rem] object-cover"
          />
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-3"
          >
            <div className="pt-10 flex flex-col space-y-4">
              <h1 className="font-semibold text-[32px] leading-[42px] text-blue">
                I'm Jess Jonassen
              </h1>
              <h3 className="font-medium text-lg leading-[23px] text-blue">
                A Lead <span className="text-ornage">UX & UI</span> designer
                based in <span className="text-ornage">Canada</span>
              </h3>
              <p className="text-base leading-[30px] font-normal text-semiBlack">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences through
                meaningful interactions. Check out my Portfolio
              </p>
              <hr />
            </div>
            <ul className="flex flex-col md:grid md:grid-cols-2 pt-2 gap-y-5">
              <h2 className="text-[20px] leading-[26px] font-semibold md:text-[26px] md:leading-[26px] w-full col-span-2 text-blue  uppercase">
                Personal info
              </h2>
              {Object.keys(about).map((key) => (
                <li key={key} className="text-base leading-[30px]">
                  <span className="capitalize text-semiBlack">{key}: </span>
                  <span className="text-black font-medium">{about[key]}</span>
                </li>
              ))}
              <Button text={"Download CV"} />
            </ul>
          </motion.div>
        </div>
      </motion.div>
      <Experience />
    </motion.section>
  );
};

export default About;
