// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://gaurav.imapro.in',
  trailingSlash: 'never',
  build: {
    format: 'file'
  }
});
