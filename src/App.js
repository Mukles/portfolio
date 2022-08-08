import About from "./Components/about";
import Contact from "./Components/contact";
import Experience from "./Components/experience";
import Footer from "./Components/fotter";
import Header from "./Components/header";
import Home from "./Components/home";
import News from "./Components/new";
import Portfolio from "./Components/portfolio";
import Services from "./Components/services";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <News />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
