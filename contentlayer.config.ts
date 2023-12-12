import { defineDocumentType, makeSource } from "contentlayer/source-files";

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.md`,
  fields: {
    title: { type: "string", required: true },
    intro: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    categories: { type: "json", required: true },
    author: { type: "string", required: true },
    featured: { type: "boolean", default: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => getSlug(doc),
    },
    image: {
      type: "string",
      resolve: (doc) => `/blog/${getSlug(doc)}/image.jpg`,
    },
  },
}));

export default makeSource({ contentDirPath: "content", documentTypes: [Post] });
