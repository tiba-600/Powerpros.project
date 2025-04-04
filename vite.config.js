import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/",
  // base: process.env.VITE_BASE_PATH || "/Powerpros.project",
  resolve: {
    alias: {
      "@design": path.resolve("./src/app/components/design"),
      "@functional": path.resolve("./src/app/components/functional"),
      "@core": path.resolve("./src/core"),
      "@pages": path.resolve("./src/app/pages"),
      "@style": path.resolve("./src/app/style"),
    },
  },
});

