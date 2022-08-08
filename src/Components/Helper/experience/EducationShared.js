import React from "react";

const EducationSharedCard = ({ title, datas }) => {
  return (
    <div className="card shadow bg-red-500">
      <h4 className="w-8 text capitalize text-[15px] leading-[20px] text-black bg-[#f7f7f7]">
        {title}
      </h4>
      {datas.map((data, id) => {
        return (
          <div key={id} className="flex flex-col space-y-4">
            <span>{data.texts[0]}</span>
            <span>{data.texts[1]}</span>
            <span>{data.texts[2]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default EducationSharedCard;
