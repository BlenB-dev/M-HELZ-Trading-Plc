import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  base: "./", // Ensure this is set to serve assets correctly
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
