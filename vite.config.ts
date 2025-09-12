import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  return {
    base: "./",
    plugins: [react(), tailwindcss()],
    appType: "spa",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
