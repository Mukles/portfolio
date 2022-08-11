const Buton = ({ text }) => {
  return (
    <button
      style={{ marginRight: "auto" }}
      className={
        "capitalize mr-auto hover-btn overflow-hidden flex flex-col border-2 md:border-white lg:border-semiBlack text-white lg:text-blue lg:font-medium text-[16px] leading-[30px] px-8 rounded-md py-[8px] h-[3.1rem] xl:h-[3.3rem] font-medium " +
        text
      }
    >
      <span>{text}</span>
      <span>{text}</span>
    </button>
  );
};

export default Buton;
