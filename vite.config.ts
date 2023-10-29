/// <reference types="vitest" />

import react from "@vitejs/plugin-react-swc"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), visualizer()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test.setup.ts",
    css: true,
  },
})
