import { motion } from "framer-motion";
import Card from "./Helper/portfolio/card";
import { portfolioData } from "./Helper/portfolio/data";
import Title from "./Helper/title";
const variants = {
  offScreen: {},
  onScreen: {
    transition: {
      staggerChildren: 2,
    },
  },
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-grayWhite">
      <div className="lg:container md:px-8 lg:px-10 mx-auto px-5 xl:px-28">
        <Title
          title={"portfolio"}
          header={"my portfolio"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
          }
        />
        <motion.div
          variants={variants}
          initial="offScreen"
          animate="onScreen"
          className="grid grid-cols-1 gap-y-8 md:gy-0 md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-8"
        >
          {portfolioData.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
