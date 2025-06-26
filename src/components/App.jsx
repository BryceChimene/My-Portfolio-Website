import React from "react";
import useLocalStorage from "use-local-storage";

import "../App.css";
import ParticlesBackground from './ParticlesBackground';
import Hero from "./hero/Hero";
import NavBar from "./nav_bar/NavBar";

export default function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <ParticlesBackground id="particles" isDark={isDark}/>
      <Hero /> 
      <NavBar isDark={isDark} ToggleTheme={() => setIsDark(!isDark)} />
      <div className="temp"></div>
    </div>
  );
}
