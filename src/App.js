import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MainSkills from "./components/MainSkills";
import Navbar from "./components/Navbar";
import Work from "./components/Work";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <MainSkills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
