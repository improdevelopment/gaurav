// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
    mode: 'directory'
  }),
  site: 'https://gaurav.imapro.in',
  trailingSlash: 'never',
  build: {
    format: 'file'
  }
});
