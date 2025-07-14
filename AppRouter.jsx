import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import CursorFollower from "./components/CursorFollower";
import { useState } from "react";
import { Toggle } from "./components/Toggle/Toggle";
import useLocalStorage from "use-local-storage";

function App() {
  const preference = window.matchMedia("(prefers-color:scheme:dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <Router>
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        <CursorFollower />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
