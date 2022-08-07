import { about } from "./utilities/about";

const About = () => {
  return (
    <section id="about" className=" py-8">
      <div className="container mx-auto px-10">
        <div className="about-header flex flex-col space-y-4">
          <span className="about-toltip font-medium text-base  text-ornage after:block after:absolute after:h-[2px] after:w-16 after:bg-ornage after:right-1">
            About
          </span>
          <h1 className="text-blue font-bold text-3xl">About Me</h1>
          <p className="font-normal text-base pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
            egestas. Id fermentum nullam ipsum massa.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center space-x-8">
          <img
            src="/images/9.jpg"
            alt=""
            className="rounded-lg h-[28rem] w-full md:h-[40rem]"
          />
          <div className="flex flex-col space-y-3">
            <div className="pt-8 flex flex-col space-y-5">
              <h1 className="font-semibold text-4xl text-blue">
                I'm Jess Jonassen
              </h1>
              <h3 className="font-medium text-lg text-blue">
                A Lead <span className="text-ornage">UX & UI</span> designer
                based in <span className="text-ornage">Canada</span>
              </h3>
              <p className="text-base text-gray">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences through
                meaningful interactions. Check out my Portfolio
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2">
              {Object.keys(about).map((key) => (
                <li key={key}>
                  <span className="capitalize">{key}: </span>
                  <span>{about[key]}</span>
                </li>
              ))}
              <button className="text-center w-32 py-2 rounded-lg mt-4 broder-2 border-red-600">
                Download CV
              </button>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
