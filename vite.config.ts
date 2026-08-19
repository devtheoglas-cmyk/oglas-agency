import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  // Tailwind v4 runs via the Vite plugin above; pin an empty PostCSS config so
  // Vite does not search upward and load the parent repo's postcss.config.mjs.
  css: { postcss: {} },
});
