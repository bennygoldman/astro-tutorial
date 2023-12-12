import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://splendorous-melba-abbd29.netlify.app/blog/",
  integrations: [preact()]
});