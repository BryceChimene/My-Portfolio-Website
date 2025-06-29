import React from "react";
import useLocalStorage from "use-local-storage";

import "./App.css";
import ParticlesBackground from './components/ParticlesBackground';
import Hero from "./components/hero/Hero";
import NavBar from "./components/nav_bar/NavBar";
import About from "./components/about/about";

export default function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <ParticlesBackground id="particles" isDark={isDark}/>
      <Hero /> 
      <NavBar isDark={isDark} ToggleTheme={() => setIsDark(!isDark)} />
      <About />
      <div className="temp"></div>
    </div>
  );
}
