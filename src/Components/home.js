import Button from "./Helper/button";
import TypeAnimation from "./Helper/typeAnimation";

const Home = () => {
  return (
    <section id="home" className="h-screen bg-image">
      <div className="container px-5 mx-auto flex flex-col justify-center h-full">
        <div className="home-content w-4/6 flex-col flex space-y-4">
          <div className="flex flex-col space-y-4">
            <h1 className="text-[26px] leading-[34px]">Hello I'm</h1>
            <h2 className="font-bold text-[70px] leading-[84px] text-blue">
              Tahlia McGrath
            </h2>
            <TypeAnimation />
          </div>
          <div className="discripiton">
            <p className="text-[18px] leading-[30px] text-semiBlack">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>
          </div>
          <Button text={"see portfolio"} />
        </div>
      </div>
    </section>
  );
};

export default Home;
