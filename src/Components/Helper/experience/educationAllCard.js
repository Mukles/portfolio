import { motion } from "framer-motion";
import { awards, education } from "../../utilities/experience";
import EducationSharedCard from "./EducationShared";
import EducationSkillCard from "./EducationSkillCard";

const EducationMotion = {
  show: {
    opacity: 1,
    transition: { duration: 1.2, staggerChildren: 0.8 },
  },
  hidden: {
    opacity: 0,
  },
};

const EducationAllCards = () => {
  return (
    <motion.div
      variants={EducationMotion}
      className="grid gap-8 grid-cols-1 lg:grid-cols-3 lg:gap-8 py-16"
    >
      <EducationSharedCard title={"education"} datas={education} />
      <EducationSkillCard />
      <EducationSharedCard title={"awards"} datas={awards} />
    </motion.div>
  );
};

export default EducationAllCards;
