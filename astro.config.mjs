import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://becodie.com',

    experimental: {
        integrations: true,
    },
    integrations: [
        robotsTxt(),
        react(),
        tailwind({
            config: {
                path: './tailwind.config.js'
            }
        }),
        prefetch(),
        sitemap()
    ],
});
