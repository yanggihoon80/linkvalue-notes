import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ✅ blog 컬렉션: md + mdx 모두 스캔 강제
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    hideTitle: z.boolean().optional(),
    // mdx에 있는 필드가 있으면 optional로 받아주자 (에러 방지)
    author: z.string().optional(),
    heroImageAlt: z.string().optional(),
  }),
});

export const collections = { blog };
