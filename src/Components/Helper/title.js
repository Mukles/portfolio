const Title = ({ title, description, header }) => {
  return (
    <div className="about-header flex flex-col space-y-4">
      <div className="relative">
        <span className="about-toltip font-medium text-base leadeing-[30px] text-ornage after:block after:absolute after:h-[2px] after:w-16 after:bg-ornage after:left-24 after:top-1/2 capitalize">
          {title}
        </span>
      </div>
      <h1 className="text-blue font-bold text-3xl leading-[39px] capitalize">
        {header}
      </h1>
      {description && (
        <p className="font-normal text-base leading-[30px] pb-10 text-semiBlack">
          {description}
        </p>
      )}
    </div>
  );
};

export default Title;
