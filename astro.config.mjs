import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ],
  site: 'https://tompats.github.io',
  base: '/foog'
});
