import { skills } from "../../utilities/experience";

const EducationSkillCard = () => {
  return (
    <div className="card shadow bg-white">
      <h4 className="text text-[15px] leading-[20px] text-black bg-semiBlack">
        Design
      </h4>
      {skills.map((item, idx) => (
        <div key={idx} className="">
          {item.texts.map((text, id) => (
            <span key={text + id}>{text}</span>
          ))}
          <div className="w-full">
            <div className="" style={{ width: `${item.texts[1]}` }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationSkillCard;
