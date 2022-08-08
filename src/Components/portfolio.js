import { motion } from "framer-motion";
import Card from "./Helper/portfolio/card";
import { portfolioData } from "./Helper/portfolio/data";
import Title from "./Helper/title";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-28">
      <div className="container mx-auto px-5 lg:px-28">
        <Title
          title={"portfolio"}
          header={"my portfolio"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
          }
        />
        <motion.div
          transition={{ duration: 0.5, staggerChildren: 5 }}
          className="grid grid-cols-1 gap-y-8 md:gy-0 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8"
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
