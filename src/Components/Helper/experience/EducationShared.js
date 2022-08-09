import { motion } from "framer-motion";

const EducationSharedCard = ({ title, datas }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.8 }}
      className="card shadow-sm bg-white py-5 px-12"
    >
      <h4 className="w-24 px-3 py-2 rounded text capitalize text-[15px] leading-[20px] text-black bg-[#f7f7f7]">
        {title}
      </h4>
      {datas.map((data, id) => {
        return (
          <div key={id} className="flex flex-col space-y-2 pt-4">
            <span className="text-[16px] leading-[30px] text-semiBlack">
              {data.texts[0]}
            </span>
            <p>
              <span className="text-[18px] leading-[30px] text-blue">
                {data.texts[1]}
              </span>
              <span className="text-[16px] leading-[30px] text-semiBlack">
                {data.texts[2]}
              </span>
            </p>
            {datas.length !== data.id && <hr />}
          </div>
        );
      })}
    </motion.div>
  );
};

export default EducationSharedCard;
