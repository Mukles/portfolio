import { motion } from "framer-motion";

const Card = ({ svg, title, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.8 }}
      className="bg-grayWhite rounded md:shadow-sm hover:shadw-[0 0 10px rgb(0 0 0 / 10%)] flex flex-col justify-start space-y-4 px-12 py-12"
    >
      <div className="card-img">
        <img className="h-12" src={svg} alt="" />
      </div>
      <h3 className="font-semibold text-[26px] leading-[34px] text-blue">
        {title}
      </h3>
      <button className="flex space-x-5 text-left text-lg leading-[30px] font-normal hover:text-ornage text-semiBlack">
        <span>{link}</span>
        <span className="learn-more">
          <i className="fa-solid fa-arrow-right-long hover:text-3xl"></i>
        </span>
      </button>
    </motion.div>
  );
};

export default Card;
