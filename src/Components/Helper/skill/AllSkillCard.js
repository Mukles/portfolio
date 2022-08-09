import { expericeData } from "../../utilities/experience";
import SkillSharedCard from "./SkillSharedCard";

const AllSkillCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 py-16">
      {expericeData.map((experice) => (
        <SkillSharedCard {...experice} />
      ))}
    </div>
  );
};

export default AllSkillCard;
