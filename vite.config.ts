import { defineConfig } from "vite";

export default defineConfig({
  server: {
    hmr: {
      clientPort: process.env.GITPOD_WORKSPACE_URL ? 443 : 3030,
      host: process.env.GITPOD_WORKSPACE_URL
        ? process.env.GITPOD_WORKSPACE_URL.replace("https://", "3030-")
        : "localhost",
    },
  },
});
