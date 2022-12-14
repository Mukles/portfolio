import Typewriter from "typewriter-effect";

const TypeAnimation = () => {
  return (
    <div className="text-[30px] lg:text-[36px] leading-[39px] lg:leading-[47px] text-ornage font-semibold capitalize">
      <Typewriter
        options={{
          strings: [
            "Hobby is writing",
            "top level freelencer",
            "Fulltime youtuber",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypeAnimation;
