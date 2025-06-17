import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets",
          dest: "",
        },
      ],
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000", // API server
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, ''), // Menghapus /api dari URL
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["react-toastify"],
    exclude: [],
  },
  build: {
    commonjsOptions: {
      include: [/react-toastify/, /node_modules/],
    },
  },
});
