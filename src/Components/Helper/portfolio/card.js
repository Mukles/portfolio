const Card = ({ img, title, subTitle }) => {
  return (
    <div className="shadow relative overflow-hidden rounded-lg">
      <img className="w-full object-cover" src={img} alt={""} />
      <div className="overlay flex justify-end px-5 py-5 flex-col bg-[#000000cf] absolute top-0 left-0 w-full h-full ">
        <h3 className="text-ornage font-semibold leading-[29px] text-[22px]">
          {title}
        </h3>
        <h2 className="text-white text-base leading-[30px]">{subTitle}</h2>
      </div>
    </div>
  );
};

export default Card;
