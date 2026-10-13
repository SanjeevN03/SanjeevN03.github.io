import { defineConfig } from 'astro/config';

// For the simplest GitHub Pages setup, create a repository named
// YOUR-GITHUB-USERNAME.github.io and keep base set to '/'.
export default defineConfig({
  site: 'https://YOUR-GITHUB-USERNAME.github.io',
  base: '/',
  output: 'static'
});
