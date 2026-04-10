/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#22d3ee",
          violet: "#a78bfa",
          rose: "#fb7185",
          amber: "#fbbf24",
          deep: "#0f172a",
        },
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.25), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(167, 139, 250, 0.2), transparent), radial-gradient(ellipse 50% 30% at 0% 100%, rgba(251, 113, 133, 0.15), transparent)",
        "section-fade":
          "linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.6) 50%, transparent 100%)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(34, 211, 238, 0.35)" },
          "50%": { boxShadow: "0 0 32px rgba(167, 139, 250, 0.45)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.9s ease-out forwards",
        "fade-in-up": "fadeInUp 0.75s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
        float: "float 5s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
