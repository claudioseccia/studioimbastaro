import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
  base: "/",
  // base: "/preview/",
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  server: {
    historyApiFallback: true, // 👈 Ensures React Router works properly
    proxy: {
      "/api": {
        target: "https://studioimbastaro.it", // 👈 Replace with your API domain
        changeOrigin: true,
        secure: false,
      },
    },
  },
  define: {
    //"process.env": {},
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
