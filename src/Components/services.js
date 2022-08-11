import { motion } from "framer-motion";
import Card from "./Helper/service/card";
import Title from "./Helper/title";
import { servicsData } from "./utilities/serviceData";

const CardParentMotion = {
  offScreen: {
    opacity: 0,
  },
  onScreen: {
    opacity: 1,
    transition: { staggerChildren: 1, duration: 0.5 },
  },
};

const Services = () => {
  return (
    <section id="service" className="py-5">
      <div className="container px-5 mx-auto">
        <Title
          title={"services"}
          header={"I provide wide range of digital services"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
          }
        />
        {/*** cards  ***/}
        <motion.div
          variants={CardParentMotion}
          initial={"offScreen"}
          animate={"onScreen"}
          className="grid gap-6 grid-cols-1 md:grid-cols-2 md:gap-8 gap-y-8 xl:grid-cols-3"
        >
          {servicsData.map((service) => {
            return <Card key={service.id} {...service} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
