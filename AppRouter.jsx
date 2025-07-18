import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import { useState } from "react";
import { Toggle } from "./components/Toggle/Toggle";
import useLocalStorage from "use-local-storage";
import Home from "./pages/Home/Home";
import BlobCursor from "./components/BlobCursor/BlobCursor";
import Clouds from "./components/Clouds/Clouds";

function App() {
  const preference = window.matchMedia("(prefers-color:scheme:dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <Router>
        <Clouds />
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        <BlobCursor />
        <Navbar isDark={isDark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
