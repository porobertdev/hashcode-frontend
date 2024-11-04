import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import metaTags from 'astro-meta-tags';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), metaTags()],
    output: 'hybrid',
    adapter: cloudflare(),
});
