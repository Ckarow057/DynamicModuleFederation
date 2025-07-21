import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-app-3",
      filename: "remoteEntry.js",
      exposes: {
        "./remote3Root": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 9002,
  },
  preview: {
    port: 9002,
  },
  build: {
    target: 'esnext'
  }
});