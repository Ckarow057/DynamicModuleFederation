import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-app-5",
      filename: "remoteEntry.js",
      exposes: {
        "./remote5Root": "./src/App.tsx",
        // "./remote5Component": "./src/components/remoteButton.tsx",

      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 9004,
  },
  preview: {
    port: 9004,
  },
  build: {
    target: 'esnext'
  }
});