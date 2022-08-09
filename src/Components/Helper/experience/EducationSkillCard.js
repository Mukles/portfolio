import { motion } from "framer-motion";
import { skills } from "../../utilities/experience";

const EducationSkillCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.8 }}
      className="card shadow-sm bg-white py-5 px-12"
    >
      <h4 className="w-24 px-3 py-2 rounded text capitalize text-[15px] leading-[20px] text-black bg-[#f7f7f7]">
        design
      </h4>
      {skills.map((item, idx) => (
        <div key={idx} className="flex flex-col pt-4 mt-4">
          <div className="flex justify-between space-y-3">
            {item.texts.map((text, id) => (
              <span
                className="capitalize text-[16px] leading-[30px] text-blue"
                key={text + id}
              >
                {text}
              </span>
            ))}
          </div>
          <div className="w-full bg-semiBlack h-2 rounded overflow-hidden">
            <div
              className="h-full bg-ornage"
              style={{ width: `${item.texts[1]}%` }}
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default EducationSkillCard;
