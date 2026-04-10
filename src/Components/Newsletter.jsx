import React from "react";

const skillGroups = [
  {
    title: "Stack",
    items: [
      "Java (Spring Boot)",
      "React.js",
      "C#",
      "Python (Basic)",
      "Flutter (Basic)",
    ],
  },
  {
    title: "Practices",
    items: [
      "Git / GitHub",
      "System design",
      "API design",
      "Communication",
    ],
  },
  {
    title: "Languages",
    items: ["Kinyarwanda", "English", "French"],
  },
];

const certifications = ["NetOps Certificate", "English Proficiency Certificate"];

const Newsletter = () => {
  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 py-20 px-4 text-white"
      id="skills"
    >
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-rose-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px]">
        <h2 className="text-3xl font-bold md:text-5xl">
          Skills &{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-amber-300 bg-clip-text text-transparent">
            certifications
          </span>
        </h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Tools and strengths I rely on when building products end-to-end—from
          UI to APIs to mobile.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20"
              style={{ animationDelay: `${gi * 100}ms` }}
            >
              <h3 className="text-lg font-bold text-violet-300">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <span
                    key={skill}
                    className="animate-fade-in-up rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 px-3 py-1.5 text-sm font-medium text-cyan-100 transition hover:scale-105 hover:border-amber-400/50"
                    style={{
                      animationDelay: `${gi * 80 + si * 40}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-amber-400/20 bg-gradient-to-r from-amber-500/10 via-transparent to-cyan-500/10 p-8">
          <h3 className="text-xl font-bold text-amber-200">Certifications</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {certifications.map((c) => (
              <li
                key={c}
                className="flex items-center gap-2 rounded-lg bg-black/30 px-4 py-3 text-slate-200 ring-1 ring-white/10 transition hover:ring-amber-400/40"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-amber-400 to-cyan-400" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
