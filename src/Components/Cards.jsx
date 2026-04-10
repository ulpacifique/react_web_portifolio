import React from "react";
import {
  FaBook,
  FaBriefcase,
  FaCalendarAlt,
  FaLeaf,
  FaWallet,
} from "react-icons/fa";

const projects = [
  {
    title: "Smart Library & ICT Asset Management",
    tech: "React · Spring Boot · MySQL",
    icon: FaBook,
    accent: "from-cyan-500 to-blue-600",
    ring: "ring-cyan-400/40",
    points: [
      "Reduced check-out time by 70%",
      "500+ books catalogued",
      "Role-based auth for 3 roles",
    ],
  },
  {
    title: "Garden Management System",
    tech: "C# · .NET · SQL Server",
    icon: FaLeaf,
    accent: "from-emerald-500 to-teal-600",
    ring: "ring-emerald-400/40",
    points: [
      "Plant tracking workflows",
      "Automated watering reminders",
    ],
  },
  {
    title: "Money Tracker App",
    tech: "Flutter · Dart · SQLite",
    icon: FaWallet,
    accent: "from-violet-500 to-fuchsia-600",
    ring: "ring-violet-400/40",
    points: [
      "1,000+ transactions supported",
      "Offline-first local storage",
    ],
  },
  {
    title: "Event Finder App",
    tech: "Flutter · REST API",
    icon: FaCalendarAlt,
    accent: "from-rose-500 to-orange-500",
    ring: "ring-rose-400/40",
    points: ["Location-based search", "Event discovery experience"],
  },
  {
    title: "Job Portal System",
    tech: "React · Spring Boot · MySQL",
    icon: FaBriefcase,
    accent: "from-amber-500 to-yellow-500",
    ring: "ring-amber-400/40",
    points: [
      "100+ job listings",
      "Role-based access & pagination",
    ],
  },
];

const Cards = () => {
  return (
    <div
      className="w-full bg-gradient-to-b from-slate-50 to-white py-24 px-4"
      id="projects"
    >
      <div className="mx-auto max-w-[1240px]">
        <p className="text-center font-bold uppercase tracking-wider text-violet-600">
          Portfolio
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-slate-900 md:text-5xl">
          Selected{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
            projects
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Products and systems built with modern stacks—focused on reliability,
          roles & permissions, and measurable outcomes for users.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <article
                key={project.title}
                className={`group relative flex animate-fade-in-up flex-col rounded-2xl border border-slate-200/80 bg-white p-6 opacity-0 shadow-xl shadow-slate-200/50 ring-2 ${project.ring} transition duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                style={{
                  animationDelay: `${i * 90}ms`,
                }}
              >
                <div
                  className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${project.accent} text-white shadow-lg transition group-hover:scale-110 group-hover:rotate-3`}
                >
                  <Icon className="text-2xl" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-cyan-700">
                  {project.tech}
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-slate-600">
                  {project.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-sm">
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${project.accent}`}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
