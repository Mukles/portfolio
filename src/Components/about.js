import { motion } from "framer-motion";
import Button from "./Helper/button";
import Title from "./Helper/title";
import { about } from "./utilities/about";
const parentVarient = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
  },
  transition: {
    transition: { duration: 1.2, staggerChildren: 0.3 },
  },
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-16"
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.div className="container mx-auto px-5">
        <Title
          title={"about me"}
          header={"about me"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
          }
        />
        <div className="flex flex-col lg:flex-row items-center md:space-x-12 lg:space-x-24">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            src="/images/9.jpg"
            alt=""
            className="rounded-lg h-[23rem] sm:h-auto w-full md:h-[40rem]"
          />
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-3"
          >
            <div className="pt-8 flex flex-col space-y-5">
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
              <h2 className="text-[26px] w-full col-span-2 text-blue leading-[26px] uppercase">
                Personal info
              </h2>
              {Object.keys(about).map((key) => (
                <li key={key} className="text-base leading-[30px]">
                  <span className="capitalize text-semiBlack">{key}: </span>
                  <span className="text-black">{about[key]}</span>
                </li>
              ))}
              <Button text={"Download CV"} />
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
