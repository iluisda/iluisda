import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import readingTime from "reading-time";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    date: z.string(),
    excerpt: z.string(),
    content: z.string(),
  }),
  transform: async (doc, context) => {
    const pathParts = doc._meta.path.split("/");
    const html = await compileMarkdown(context, doc);
    const rt = readingTime(doc.content);
    return {
      ...doc,
      slug: pathParts[pathParts.length - 1],
      lang: pathParts[0],
      body: { html, raw: doc.content },
      readingTime: { minutes: rt.minutes, text: rt.text, time: rt.time, words: rt.words },
    };
  },
});

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    image: z.string().optional(),
    date: z.string(),
    excerpt: z.string(),
    content: z.string(),
  }),
  transform: async (doc, context) => {
    const pathParts = doc._meta.path.split("/");
    const html = await compileMarkdown(context, doc);
    const rt = readingTime(doc.content);
    return {
      ...doc,
      slug: pathParts[pathParts.length - 1],
      lang: pathParts[0],
      body: { html, raw: doc.content },
      readingTime: { minutes: rt.minutes, text: rt.text, time: rt.time, words: rt.words },
    };
  },
});

const cvs = defineCollection({
  name: "cvs",
  directory: "content/cv",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    from: z.string(),
    to: z.string().optional(),
    current: z.boolean().optional(),
    label_current: z.string().optional(),
    location: z.string().optional(),
    what: z.string(),
    where: z.string().optional(),
    url: z.string().optional(),
    content: z.string(),
  }),
  transform: async (doc, context) => {
    const pathParts = doc._meta.path.split("/");
    const html = await compileMarkdown(context, doc);
    return {
      ...doc,
      slug: pathParts[pathParts.length - 1],
      lang: pathParts[0],
      event: pathParts[1],
      body: { html, raw: doc.content },
    };
  },
});

export default defineConfig({
  content: [posts, projects, cvs],
});
