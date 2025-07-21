import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-app-1",
      filename: "remoteEntry.js",
      exposes: {
        "./remote1Root": "./src/App.tsx",
        // "./remote1Component": "./src/components/remoteButton.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 9000,
  },
  preview: {
    port: 9000,
  },
  build: {
    target: 'esnext'
  }
});