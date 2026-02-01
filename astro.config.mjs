// astro.config.mjs
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

// mode는 CLI에서 직접 읽는다
const cliMode =
  process.argv.includes("--mode")
    ? process.argv[process.argv.indexOf("--mode") + 1]
    : "development";

const env = loadEnv(cliMode, process.cwd(), "");

const fallbackSite = "https://notes.linkvalue.co";
const rawSite = cliMode === "production" ? env.PROD_SITE : env.DEV_SITE;
const site = rawSite?.trim() || fallbackSite;

// ✅ 여기서 로그 찍으면 100% 나온다
//console.error("[astro.config] mode =", cliMode);
//console.error("[astro.config] DEV_SITE =", env.DEV_SITE);
//console.error("[astro.config] PROD_SITE =", env.PROD_SITE);
//console.error("[astro.config] FINAL site =", site);

export default defineConfig({
  site,
  integrations: [mdx(), sitemap()],
});
