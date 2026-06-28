/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,md,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.65s cubic-bezier(0.22, 1, 0.36, 1) both",
        "nav-appear": "nav-appear 1s linear both",
        "scale-up-center":
          "scale-up-center 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "nav-appear": {
          "0%": {
            backgroundColor: "transparent",
            borderColor: "transparent",
            boxShadow: "none",
            backdropFilter: "none",
          },
          to: {
            backgroundColor: "var(--nav-bg-to)",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--nav-ring-to)",
            backdropFilter: "blur(12px)",
            borderColor: "var(--nav-border-to)",
          },
        },
        "scale-up-center": {
          from: { transform: "scale(0.8)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
