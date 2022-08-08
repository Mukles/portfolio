import Card from "./Helper/service/card";
import Title from "./Helper/title";
import { servicsData } from "./utilities/serviceData";

const Services = () => {
  return (
    <section id="services" className="py-5">
      <div className="container px-5 mx-auto">
        <Title
          title={"services"}
          header={"I provide wide range of digital services"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
          }
        />
        {/*** cards  ***/}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-y-8">
          {servicsData.map((service) => {
            return <Card {...service} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
