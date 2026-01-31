import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isProd = mode === "production";

  return {
    site: isProd
      ? env.PROD_SITE || "https://notes.linkvalue.co"
      : env.DEV_SITE || "http://localhost:4321",

    base: isProd
      ? env.PROD_BASE || "/"
      : env.DEV_BASE || "/",

    trailingSlash: "always",
    integrations: [mdx(), sitemap()],
  };
});
