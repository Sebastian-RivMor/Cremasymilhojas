// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import auth from "auth-astro";
import vercel from '@astrojs/vercel/serverless';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [auth()],
  output: 'server',
  adapter: vercel({
    skewProtection: true,
  }),
});
