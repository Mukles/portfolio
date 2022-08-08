import { motion } from "framer-motion";

const Card = ({ img, title, text, date }) => {
  return (
    <motion.div className="news-card cursor-pointer">
      <div className="overflow-hidden h-[380px] rounded-md object-cover">
        <motion.img
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.8 },
          }}
          exit={{ scale: 1, rotate: 0, transition: { duration: 0.8 } }}
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
        <h3 className="inline-block text-[22px] leading-[29px] text-blue hover:text-ornage">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default Card;
