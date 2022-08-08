import { awards, education } from "../../utilities/experience";
import EducationSharedCard from "./EducationShared";
import EducationSkillCard from "./EducationSkillCard";

const EducationAllCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <EducationSharedCard title={"education"} datas={education} />
      <EducationSkillCard />
      <EducationSharedCard title={"awards"} datas={awards} />
    </div>
  );
};

export default EducationAllCards;
