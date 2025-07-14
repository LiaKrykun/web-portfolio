import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
