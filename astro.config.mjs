import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Remplace par l'URL finale du site (utile pour le SEO)
export default defineConfig({
  site: 'https://lulu-menage.sylvain-dev.fr',
  integrations: [sitemap()],
});