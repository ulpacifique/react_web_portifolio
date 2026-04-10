import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const linkedInUrl =
    "https://www.linkedin.com/in/uwihirwe-pacifique-lazaro-7a9184336";

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="border-t border-white/10 bg-slate-950 px-4 py-16 text-gray-300"
      id="contact"
    >
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-3">
        <div className="animate-fade-in">
          <h2 className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-3xl font-bold text-transparent">
            Uwihirwe Pacifique Lazaro
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            Final-year Software Engineering student at AUCA. Open to roles and
            collaborations where thoughtful engineering meets real user needs.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white/5 p-3 text-cyan-400 transition hover:scale-110 hover:bg-cyan-500/20 hover:text-cyan-300"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="https://github.com/ulpacifique"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white/5 p-3 text-violet-400 transition hover:scale-110 hover:bg-violet-500/20 hover:text-violet-300"
              aria-label="GitHub profile"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="mailto:ulpacifique@gmail.com"
              className="rounded-lg bg-white/5 p-3 text-rose-400 transition hover:scale-110 hover:bg-rose-500/20 hover:text-rose-300"
              aria-label="Email"
            >
              <FaEnvelope size={26} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold uppercase tracking-wide text-violet-400">
                Contact
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-cyan-400" />
                  <span>Kigali, Nyarugenge, Rwanda</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="shrink-0 text-cyan-400" />
                  <a
                    href="mailto:ulpacifique@gmail.com"
                    className="transition hover:text-cyan-400"
                  >
                    ulpacifique@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="shrink-0 text-cyan-400" />
                  <a
                    href="tel:+250783464135"
                    className="transition hover:text-cyan-400"
                  >
                    0783 464 135
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold uppercase tracking-wide text-violet-400">
                On this page
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  ["Home", "hero"],
                  ["About", "about"],
                  ["Projects", "projects"],
                  ["Skills", "skills"],
                ].map(([label, id]) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(id)}
                      className="text-left text-slate-400 transition hover:text-cyan-400"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-[1240px] border-t border-white/10 pt-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Uwihirwe Pacifique Lazaro. Crafted with
        React & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
