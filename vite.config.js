import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // https://vitejs.dev/config/server-options.html#server-port
    port: 3000,
  },
  esbuild: {
    // https://github.com/soof-golan/so-vite-jsx-in-js/blob/main/vite.config.js
    esbuild: {
      loader: "tsx",
      include: [
        // Business as usual for .jsx and .tsx files
        "src/**/*.jsx",
        "src/**/*.tsx",
        "node_modules/**/*.jsx",
        "node_modules/**/*.tsx",

        // Add these lines to allow all .js files to contain JSX
        "./src/components/App/App.js",
        "src/components/**/*.js",
        "node_modules/**/*.js",
      ],
      exclude: [],
    },
  },
});
