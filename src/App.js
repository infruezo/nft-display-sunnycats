import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Faq from "./components/Faq";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Slider />
      <Mission />
      <Faq />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
