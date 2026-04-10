import React from "react";
import Download from "../Assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-slate-100 py-20 px-4 text-slate-900"
      id="about"
    >
      <div className="mx-auto grid max-w-[1240px] gap-12 md:grid-cols-2 md:items-center">
        <div className="animate-float order-2 md:order-1">
          <img
            className="mx-auto my-4 max-h-[340px] w-full max-w-[500px] rounded-2xl object-cover shadow-2xl shadow-violet-500/20 ring-2 ring-cyan-400/30 transition duration-500 hover:ring-violet-400/50"
            src={Download}
            alt="Pacifique working on software projects"
          />
        </div>

        <div className="order-1 flex flex-col justify-center md:order-2">
          <p className="animate-fade-in font-bold uppercase tracking-wider text-transparent bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text">
            About & experience
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl md:text-4xl">
            Software engineer in training,{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
              shipping real impact
            </span>
          </h1>
          <p className="mt-4 leading-relaxed text-slate-600">
            Final-year Software Engineering student at Adventist University of
            Central Africa (AUCA) with hands-on experience in React.js, Spring
            Boot, C#, and Flutter. Skilled in building real-world applications,
            problem-solving, and delivering efficient digital solutions.
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-cyan-200/80 bg-white/80 p-5 shadow-lg shadow-cyan-500/10 transition hover:-translate-y-1 hover:shadow-violet-500/15">
              <h2 className="font-bold text-violet-700">
                Intern — Ejobu Company, Norrsken Kigali
              </h2>
              <p className="text-sm font-medium text-cyan-700">
                June 2025 – September 2025
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-slate-600">
                <li>
                  Developed responsive web apps with React.js and Spring Boot
                  serving 200+ users.
                </li>
                <li>Reduced bug resolution time by 30%.</li>
                <li>
                  Participated in agile development with a team of 5 developers.
                </li>
                <li>Implemented RESTful API endpoints.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-rose-200/80 bg-white/80 p-5 shadow-lg shadow-rose-500/10 transition hover:-translate-y-1 hover:shadow-cyan-500/15">
              <h2 className="font-bold text-rose-700">
                Data Entry Officer — Hospital (Coronavirus period)
              </h2>
              <ul className="mt-3 list-inside list-disc space-y-1 text-slate-600">
                <li>
                  Entered patient information accurately and maintained
                  confidentiality.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-violet-900 p-6 text-white shadow-xl">
            <h3 className="text-lg font-bold text-cyan-300">Education</h3>
            <ul className="mt-3 space-y-3 text-sm text-slate-200 md:text-base">
              <li>
                <span className="font-semibold text-white">
                  B.Sc. Software Engineering
                </span>
                , AUCA (2023–2026)
              </li>
              <li>
                A&apos; Level — Mathematics, Chemistry, Biology · ES Rutobwe
              </li>
              <li>O&apos; Level — Elena Guerra Secondary School</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
