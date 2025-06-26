import React from "react";
import useLocalStorage from "use-local-storage";

import "../App.css";
import { ToggleTheme } from "./toggle_theme/ToggleTheme";
import Hero from "./hero/Hero";

import ParticlesBackground from './ParticlesBackground';

export default function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <ParticlesBackground id="particles" isDark={isDark}/>
      <Hero /> 
      <ToggleTheme isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    </div>
  );
}
