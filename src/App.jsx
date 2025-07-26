import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";

import "./App.css";
import ParticlesBackground from './components/ParticlesBackground';
import Hero from "./components/hero/Hero";
import NavBar from "./components/nav_bar/NavBar";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/Portfolio";
import Tech from "./components/tech/Tech";
import Footer from "./components/footer/Footer";
import ProjectPage from "./components/portfolio/ProjectPage"; // You’ll create this

export default function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  return (
    <BrowserRouter>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <ParticlesBackground id="particles" isDark={isDark}/>

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <NavBar isDark={isDark} ToggleTheme={() => setIsDark(!isDark)} />
              <About />
              <Portfolio />
              <Tech />
              <Footer />
            </>
          } />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
