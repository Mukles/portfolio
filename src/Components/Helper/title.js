const Title = ({ title, description, header }) => {
  return (
    <div className="about-header flex flex-col space-y-4 max-w-3xl">
      <div className="relative inline-block">
        <span className="about-toltip font-medium text-base leadeing-[30px] text-ornage after:block after:absolute after:h-[2px] after:opacity-60 after:bg-ornage after:top-1/2 capitalize">
          {title}
        </span>
      </div>
      <h1 className="text-blue font-bold text-3xl md:text-[50px] lg:text-[55px] leading-[39px] md:leading-[65px] lg:leading-[72px] capitalize">
        {header}
      </h1>
      {description && (
        <p className="font-normal text-base leading-[30px] pb-14 text-semiBlack">
          {description}
        </p>
      )}
    </div>
  );
};

export default Title;
