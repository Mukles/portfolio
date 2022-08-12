import { useState } from "react";
import EducationAllCards from "./Helper/experience/educationAllCard";
import AllSkillCard from "./Helper/skill/AllSkillCard";

const Experience = () => {
  const [education, setEducation] = useState(true);
  const toggleEducation = () => setEducation(!education);
  return (
    <div className="pt-16 bg-grayWhite">
      <div className="lg:container mx-auto md:px-8 px-5 xl:px-20">
        {/**** experience title ****/}
        <h1 className="experice-title capitalize font-bold text-4xl pb-6">
          My experience
        </h1>
        {/*** tab button ***/}
        <div className="flex space-x-4 items-center mt-5 text-[13px] font-medium">
          <button
            onClick={() => toggleEducation()}
            className={`${
              education === true
                ? "bg-ornage text-white border-2 border-ornage"
                : "border-2 border-semiBlack"
            } text-[13px] leading-[30px] text-semiBlack px-4 sm:px-7 sm:font-semibold sm:text-base py-2 rounded`}
          >
            Education & Skills
          </button>
          <button
            onClick={() => toggleEducation()}
            className={`${
              education === false
                ? "bg-ornage text-white border-2 border-ornage"
                : "border-2 border-semiBlack"
            } text-semiBlack text-[13px] leading-[30px] sm:text-base sm:font-medium px-5 sm:px-8 py-2 rounded-lg`}
          >
            Experience
          </button>
        </div>
        {/** Tab Conent will show based on education true or false **/}
        {education === true ? <EducationAllCards /> : <AllSkillCard />}
      </div>
    </div>
  );
};

export default Experience;
