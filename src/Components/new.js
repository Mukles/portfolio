import { motion } from "framer-motion";
import Card from "./Helper/news/Card";
import Title from "./Helper/title";
import { newsData } from "./utilities/newData";

const NewsMotion = {
  show: {
    opacity: 1,
    transition: { duration: 1.2, staggerChildren: 0.8 },
  },
  hidden: {
    opacity: 0,
  },
};

const News = () => {
  return (
    <section id="news" className="bg-[#f9f9fc] py-20">
      <div className="lg:container md:px-8 px-5 mx-auto">
        <Title
          title={"blogs"}
          header="recent news"
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
          }
        />
        {/*** new card ***/}
        <motion.div
          variants={NewsMotion}
          className="grid grid-cols-1 gap-y-8 md:gy-0 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {newsData.map((news, idx) => (
            <Card key={idx} {...news} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default News;
