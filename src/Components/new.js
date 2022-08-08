import Title from "./Helper/title";

const News = () => {
  return (
    <section id="news">
      <div className="container px-5 mx-auto">
        <Title
          title={"blogs"}
          header="recent news"
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa."
          }
        />
        {/*** new card ***/}
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-5">
          {}
        </div>
      </div>
    </section>
  );
};
