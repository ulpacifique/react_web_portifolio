import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setNav(false);
  };

  const linkClass =
    "p-4 cursor-pointer transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] relative after:absolute after:bottom-2 after:left-4 after:right-4 after:h-0.5 after:scale-x-0 after:bg-gradient-to-r after:from-cyan-400 after:to-violet-400 after:transition-transform hover:after:scale-x-100";

  return (
    <div className="fixed top-0 left-0 z-[100] h-20 w-full border-b border-white/5 bg-slate-950/80 shadow-lg shadow-cyan-500/5 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-4 text-white">
        <h1 className="w-full bg-gradient-to-r from-cyan-400 via-violet-400 to-rose-400 bg-clip-text text-3xl font-bold text-transparent">
          UPL.
        </h1>

        <ul className="hidden md:flex">
          <li className={linkClass} onClick={() => scrollToSection("hero")}>
            Home
          </li>
          <li className={linkClass} onClick={() => scrollToSection("about")}>
            About
          </li>
          <li className={linkClass} onClick={() => scrollToSection("projects")}>
            Projects
          </li>
          <li className={linkClass} onClick={() => scrollToSection("skills")}>
            Skills
          </li>
          <li className={linkClass} onClick={() => scrollToSection("contact")}>
            Contact
          </li>
        </ul>

        <div onClick={handleNav} className="block cursor-pointer md:hidden">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        <div
          className={
            nav
              ? "fixed left-0 top-0 z-50 h-full w-[60%] border-r border-violet-500/20 bg-slate-950/95 backdrop-blur-lg duration-500 ease-in-out"
              : "fixed left-[-100%] duration-500 ease-in-out"
          }
        >
          <h1 className="m-4 w-full bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-3xl font-bold text-transparent">
            UPL.
          </h1>
          <ul className="pt-12 uppercase tracking-wide">
            <li
              className="cursor-pointer border-b border-white/10 p-4 hover:text-cyan-400"
              onClick={() => scrollToSection("hero")}
            >
              Home
            </li>
            <li
              className="cursor-pointer border-b border-white/10 p-4 hover:text-cyan-400"
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
            <li
              className="cursor-pointer border-b border-white/10 p-4 hover:text-cyan-400"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </li>
            <li
              className="cursor-pointer border-b border-white/10 p-4 hover:text-cyan-400"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </li>
            <li
              className="cursor-pointer p-4 hover:text-cyan-400"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
