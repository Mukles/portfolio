import { useState } from "react";
import EducationAllCards from "./Helper/experience/educationAllCard";
import Skill from "./Helper/experience/skill";

const Experience = () => {
  const [education, setEducation] = useState(true);
  const toggleEducation = () => setEducation(!education);
  return (
    <section id="experience" className="py-5">
      <div className="container mx-auto px-5">
        {/**** experience title ****/}
        <h1 className="experice-title capitalize font-bold text-4xl">
          My experience
        </h1>
        {/*** tab button ***/}
        <div className="flex space-x-4 items-center mt-5">
          <button
            onClick={() => toggleEducation()}
            className={`${
              education === true
                ? "bg-ornage text-white border-2 border-ornage"
                : "border-2 border-semiBlack"
            } text-[13px] leading-[30px] text-semiblack px-3 py-1 rounded`}
          >
            Education & Skills
          </button>
          <button
            onClick={() => toggleEducation()}
            className={`${
              education === false
                ? "bg-ornage text-white border-2 border-ornage"
                : "border-2 border-semiBlack"
            } text-semiBlack text-[13px] leading-[30px] px-4 py-1 rounded-lg`}
          >
            Experience
          </button>
        </div>
        {/** Tab Conent will show based on education true or false **/}
        {education === true ? <EducationAllCards /> : <Skill />}
      </div>
    </section>
  );
};

export default Experience;
