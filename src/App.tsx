import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Repair from "./components/Repair";
import Stats from "./components/Stats";

const App = () => {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <Stats />
      <Repair />
    </main>
  );
};

export default App;
