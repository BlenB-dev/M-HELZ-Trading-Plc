import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  base: "./",
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
