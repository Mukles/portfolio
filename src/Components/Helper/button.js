const Buton = ({ text }) => {
  return (
    <button
      className={
        "mr-auto capitalize hover-btn overflow-hidden flex flex-col h-12 border-2 lg:border-[6e6e6e] md:border-white lg:border-semiBlack md:text-white lg:text-semiBlack text-[16px] leading-[30px] px-8 rounded py-[6px] " +
        text
      }
    >
      <span>{text}</span>
      <span>{text}</span>
    </button>
  );
};

export default Buton;
