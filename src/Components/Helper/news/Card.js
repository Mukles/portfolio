import { motion } from "framer-motion";

const Card = ({ img, title, text, date }) => {
  return (
    <motion.div
      className="news-card cursor-pointer"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.8 }}
    >
      <div className="overflow-hidden h-[380px] rounded-md object-cover">
        <motion.img
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.8 },
          }}
          className="object-cover h-full"
          src={`${img}`}
          alt=""
        />
      </div>
      <div className="content">
        <p className="text-base leading-[30px] text-semiBlack py-1">
          <span className="cursor-not-allowed">{date}</span>
          <span className="w-1 h-1 cursor-pointer mx-2 rounded-full bg-semiBlack inline-block"></span>
          <span className="cursor-pointer hover:text-ornage">{text}</span>
        </p>
        <h3 className="inline-block text-[22px] leading-[29px] font-bold text-blue hover:text-ornage">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default Card;
