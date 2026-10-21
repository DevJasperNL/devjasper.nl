// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the production domain (https://devjasper.nl) before launch.
  site: 'https://example.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap({ filter: (page) => !page.includes('/directions') && !page.includes('/variants') })]
});
