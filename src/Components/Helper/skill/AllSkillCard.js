import { motion } from "framer-motion";
import { expericeData } from "../../utilities/experience";
import SkillSharedCard from "./SkillSharedCard";

const SkillMotion = {
  show: {
    opacity: 1,
    transition: { duration: 1.2, staggerChildren: 0.8 },
  },
  hidden: {
    opacity: 0,
  },
};

const AllSkillCard = () => {
  return (
    <motion.div
      variants={SkillMotion}
      className="grid pt-7 grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-8"
    >
      {expericeData.map((experice) => (
        <SkillSharedCard {...experice} />
      ))}
    </motion.div>
  );
};

export default AllSkillCard;
