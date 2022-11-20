import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import compress from "astro-compress";

export default defineConfig({
    integrations: [react(), compress()],
    output: "server",
    adapter: vercel(),
});
