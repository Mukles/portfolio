import Card from "./Helper/news/Card";
import Title from "./Helper/title";
import { newsData } from "./utilities/newData";

const News = () => {
  return (
    <section id="news" className="bg-[#f9f9fc] py-20">
      <div className="container px-5 mx-auto">
        <Title
          title={"blogs"}
          header="recent news"
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
          }
        />
        {/*** new card ***/}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8">
          {newsData.map((news, idx) => (
            <Card key={idx} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
