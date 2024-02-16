// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
// Define a function to dynamically determine the document type

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.md`,
  fields: {
    title: { type: "string", required: true },
    image: { type: "string" },
    date: { type: "date", required: true },
    excerpt: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (_) => _._raw.sourceFileName.replace(/\.[^.$]+$/, ""),
    },
    lang: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/")[1],
    },
  },
}));

export const CvDocument = defineDocumentType(() => ({
  name: "CV",
  filePathPattern: `cv/**/*.md`, // Include locale folder in filePathPattern
  contentType: "markdown",
  fields: {
    title: {
      type: "string",
      description: "The title",
      required: true,
    },
    location: {
      type: "string",
      description: "The location",
      required: false,
    },
    from: {
      type: "date",
      description: "The starting date",
      required: true,
    },
    to: {
      type: "date",
      description: "The ending date",
      required: true,
    },
    where: {
      type: "string",
      description: "The company, school, or institution",
      required: false,
    },
    what: {
      type: "string",
      description: "The position or title",
      required: true,
    },
    url: {
      type: "string",
      description: "The link to the company if needed",
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (_) => _._raw.sourceFileName.replace(/\.[^.$]+$/, ""),
    },
    event: {
      type: "enum",
      options: ["education", "work-experiences", "projects"],
      resolve: (_) => _._raw.sourceFileDir.replace("cv/", "").split("/")[1],
    },
    lang: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/")[1],
    },
  },
}));
export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, CvDocument],
});
