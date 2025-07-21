import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-app-4",
      filename: "remoteEntry.js",
      exposes: {
        "./remote4Root": "./src/App.tsx",
        // "./remote2Component": "./src/components/remoteHeader.tsx",

      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 9003,
  },
  preview: {
    port: 9003,
  },
  build: {
    target: 'esnext'
  }
});