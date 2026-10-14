import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF8", ink: "#23252B", muted: "#5E6270", line: "#E6E4EE",
        accent: { DEFAULT: "#5B4BD5", soft: "#EFECFD" },
      },
      fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
      boxShadow: { card: "0 1px 2px rgba(35,37,43,.05), 0 8px 24px -12px rgba(35,37,43,.12)" },
    },
  },
  plugins: [],
};
export default config;
