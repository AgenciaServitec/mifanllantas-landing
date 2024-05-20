import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { seoConfig } from "./src/utils/seoConfig";
import netlify from "@astrojs/netlify/functions";
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown()],
  build: {
    inlineStylesheets: "always"
  },
  compressHTML: true,
  prefetch: true,
  output: "server",
  site: seoConfig.baseURL,
  adapter: netlify()
});