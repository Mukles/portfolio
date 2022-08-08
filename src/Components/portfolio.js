import Card from "./Helper/portfolio/card";
import { portfolioData } from "./Helper/portfolio/data";
import Title from "./Helper/title";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container mx-auto px-5">
        <Title
          title={"portfolio"}
          header={"my portfolio"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
          }
        />
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {portfolioData.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
