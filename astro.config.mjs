import {defineConfig} from "astro/config";
import react from "@astrojs/react";
import {seoConfig} from "./src/utils/seoConfig"

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
  prefetch: true,
  output: "hybrid",
  site: seoConfig.baseURL,
});
