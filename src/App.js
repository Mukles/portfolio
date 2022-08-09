import About from "./Components/about";
import Contact from "./Components/contact";
import Experience from "./Components/experience";
import Footer from "./Components/fotter";
import Home from "./Components/home";
import LargeDeviceNav from "./Components/nav/laptop";
import Mobile from "./Components/nav/mobile";
import News from "./Components/new";
import Portfolio from "./Components/portfolio";
import Services from "./Components/services";

function App() {
  return (
    <>
      <Mobile />
      <LargeDeviceNav />
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
