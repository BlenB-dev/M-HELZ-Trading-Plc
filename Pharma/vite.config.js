import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets", // Ensure assets are stored in the 'assets' directory
  },
  base: "./", // Ensures relative paths are used for all assets
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
