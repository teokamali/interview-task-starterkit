import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            roboto: ["var(--font-roboto)"],
            dancing: ["var(--font-dancing)"],
         },
         colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
         },
      },
   },
   plugins: [],
};
export default config;
