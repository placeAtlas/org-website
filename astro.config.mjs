import { defineConfig, sharpImageService } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    service: sharpImageService(),
    remotePatterns: [{ protocol: "https" }],
  },
  compressHTML: false
});