import About from "./components/About";
import Artworks from "./components/Artworks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex w-screen flex-col items-center">
      <Header />
      <Hero />
      <div className=" flex w-full flex-col items-center bg-white">
        <About />
        <Skills />
        <Projects />
        <Artworks />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;