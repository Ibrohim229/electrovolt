import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Repair from "./components/Repair";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Team from "./components/Team";
import Tools from "./components/Tools";

const App = () => {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <Stats />
      <Repair />
      <Services />
      <About />
      <Tools />
      <Team />
    </main>
  );
};

export default App;
