// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // رفع الحد من 500KB إلى 1MB
    chunkSizeWarningLimit: 1000,

    // تقسيم الكود بشكل يدوي (manualChunks)
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          firebase: ["firebase/app", "firebase/auth", "firebase/firestore"],
          router: ["react-router-dom"],
        },
      },
    },
  },
});