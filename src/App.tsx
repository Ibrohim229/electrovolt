import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Repair from "./components/Repair";
import Services from "./components/Services";
import Stats from "./components/Stats";

const App = () => {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <Stats />
      <Repair />
      <Services />
    </main>
  );
};

export default App;
