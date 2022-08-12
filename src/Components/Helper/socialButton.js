import Buton from "./button";

const SocialButton = () => {
  return (
    <div className="socail__buttons hidden xl:flex flex-col absolute right-9 top-1/2">
      <Buton text={"FB"} />
      <Buton text={"DR."} />
      <Buton text={"BE."} />
      <Buton text={"TW."} />
    </div>
  );
};

export default SocialButton;
