import Button from "./Helper/button";
import Title from "./Helper/title";
import { about } from "./utilities/about";
const About = () => {
  return (
    <section id="about" className="py-8">
      <div className="container mx-auto px-5">
        <Title
          title={"about me"}
          header={"about me"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
          }
        />
        <div className="flex flex-col lg:flex-row items-center md:space-x-8">
          <img
            src="/images/9.jpg"
            alt=""
            className="rounded-lg h-[23rem] w-full md:h-[40rem]"
          />
          <div className="flex flex-col space-y-3">
            <div className="pt-8 flex flex-col space-y-5">
              <h1 className="font-semibold text-[32px] leading-[42px] text-blue">
                I'm Jess Jonassen
              </h1>
              <h3 className="font-medium text-lg leading-[23px] text-blue">
                A Lead <span className="text-ornage">UX & UI</span> designer
                based in <span className="text-ornage">Canada</span>
              </h3>
              <p className="text-base leading-[30px] font-normal text-semiBlack">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences through
                meaningful interactions. Check out my Portfolio
              </p>
              <hr />
            </div>
            <ul className="flex flex-col md:grid md:grid-cols-2 pt-2 gap-y-5">
              <h2 className="text-[26px] w-full col-span-2 text-blue leading-[26px] uppercase">
                Personal info
              </h2>
              {Object.keys(about).map((key) => (
                <li key={key} className="text-base leading-[30px]">
                  <span className="capitalize text-semiBlack">{key}: </span>
                  <span className="text-black">{about[key]}</span>
                </li>
              ))}
              <Button text={"Download CV"} />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
