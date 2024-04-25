import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { seoConfig } from "./src/utils/seoConfig";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  build: {
    inlineStylesheets: "always"
  },
  compressHTML: true,
  prefetch: true,
  output: "hybrid",
  site: seoConfig.baseURL,
  adapter: netlify()
});