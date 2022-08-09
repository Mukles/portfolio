import { expericeData } from "../../utilities/experience";
import SkillSharedCard from "./SkillSharedCard";

const AllSkillCard = () => {
  return (
    <div className="grid pt-16 grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-8">
      {expericeData.map((experice) => (
        <SkillSharedCard {...experice} />
      ))}
    </div>
  );
};

export default AllSkillCard;
