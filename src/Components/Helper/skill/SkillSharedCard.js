const SkillSharedCard = ({ name, shifty, present, button, discription }) => {
  return (
    <div className="card shadow-sm bg-white py-5 px-12 flex flex-col space-y-3 rounded-md">
      <h3 className="text-[22px] leading-[29px] font-semibold">{name}</h3>
      <p className="text-[14px] leading-[18px] italic">{shifty}</p>
      <p className="text-base leading-[20px] text-semiBlack">{present}</p>
      <hr />
      <button className="w-34 mr-auto px-3 py-2 rounded text capitalize text-[15px] leading-[20px] text-ornage bg-[#f7f7f7]">
        {button}
      </button>
      <p className="leading-[30px] text-semiBlack">{discription}</p>
    </div>
  );
};

export default SkillSharedCard;
