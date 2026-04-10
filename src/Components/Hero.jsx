import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative overflow-hidden bg-hero-mesh text-white"
      id="hero"
    >
      <div className="pointer-events-none absolute inset-0 bg-section-fade" />
      <div className="relative mx-auto mt-[-96px] flex min-h-screen w-full max-w-[900px] flex-col justify-center px-4 text-center">
        <p className="animate-fade-in p-2 font-semibold tracking-widest text-cyan-400">
          UWIHIRWE PACIFIQUE LAZARO
        </p>
        <h1 className="animate-fade-in-up py-4 text-4xl font-bold sm:text-5xl md:py-6 md:text-6xl lg:text-7xl">
          Building{" "}
          <span className="text-gradient">real-world software</span>
          <br />
          with clarity & care.
        </h1>
        <p className="animate-fade-in-up animation-delay-100 mx-auto max-w-xl text-slate-400 md:text-lg">
          Kigali, Nyarugenge, Rwanda · Final-year Software Engineering at AUCA
        </p>
        <div className="animate-fade-in-up animation-delay-200 mx-auto flex min-h-[4rem] flex-col items-center justify-center gap-2 py-6 sm:flex-row sm:gap-3">
          <p className="text-xl font-bold sm:text-2xl md:text-4xl">
            I craft solutions with
          </p>
          <ReactTyped
            className="text-xl font-bold text-violet-300 sm:text-2xl md:text-4xl md:pl-1"
            strings={[
              "React.js",
              "Spring Boot",
              "C# & .NET",
              "Flutter",
              "RESTful APIs",
            ]}
            typeSpeed={90}
            backSpeed={70}
            loop
          />
        </div>
        <p className="animate-fade-in-up animation-delay-300 mx-auto max-w-2xl text-base font-medium text-slate-400 md:text-lg">
          Hands-on experience shipping responsive web apps, APIs, and mobile
          tools—focused on performance, clean architecture, and users who
          depend on the product every day.
        </p>
        <div className="animate-fade-in-up animation-delay-400 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            className="animate-glow w-[220px] rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:scale-105 hover:brightness-110"
          >
            View projects
          </button>
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="w-[220px] rounded-lg border border-violet-400/50 bg-white/5 py-3 font-semibold text-white backdrop-blur transition hover:border-cyan-400/60 hover:bg-white/10"
          >
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
