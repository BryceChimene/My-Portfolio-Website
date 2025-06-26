import React from "react";
import useLocalStorage from "use-local-storage";

import "../App.css";
import { ToggleTheme } from "./toggle_theme/ToggleTheme";
import Hero from "./hero/Hero";

export default function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Hero /> 
      <ToggleTheme isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    </div>
  );
}
