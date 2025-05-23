// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  image: {
    service: passthroughImageService(),
  },
  adapter: cloudflare({
    imageService: "passthrough",
    platformProxy: {
      enabled: true,
    },
  }),
  security: {
    checkOrigin: true,
  },
});
