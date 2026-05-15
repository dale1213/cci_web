import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1D3A",
        columbia: "#1E4A8C",
        accent: "#2563EB",
        skywash: "#EFF6FF",
        line: "#E5E7EB",
        paper: "#F8FAFC"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(11, 29, 58, 0.10)",
        card: "0 12px 32px rgba(11, 29, 58, 0.08)"
      },
      fontFamily: {
        display: ["Georgia", "Playfair Display", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
