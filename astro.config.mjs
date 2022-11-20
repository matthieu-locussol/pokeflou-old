import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
    integrations: [
        react(),
        compress(),
        image({
            serviceEntryPoint: "@astrojs/image/sharp",
        }),
    ],
    output: "server",
    adapter: vercel(),
});
