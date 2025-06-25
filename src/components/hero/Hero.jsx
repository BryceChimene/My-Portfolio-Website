import React from "react";
import "./Hero.css"; // optional styling file

export function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to the App</h1>
      <p>Your gateway to something awesome.</p>
      <button>Get Started</button>
    </section>
  );
}