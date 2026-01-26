// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://yanggihoon80.github.io",
  base: "/linkvalue-notes",
  trailingSlash: "always",
  integrations: [mdx(), sitemap()],
});
