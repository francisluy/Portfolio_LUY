import About from "./components/About";
import Artworks from "./components/Artworks";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <div className="z-10 flex w-full flex-col items-center bg-white">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Artworks />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
