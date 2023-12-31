import { defineDocumentType, makeSource } from "contentlayer/source-files";

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");
const getAuthorSlug = (doc: any) => doc.author.replace(" ", "-").toLowerCase();

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    intro: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    category: { type: "string", required: true },
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
    authorImage: {
      type: "string",
      resolve: (doc) => `/authors/${getAuthorSlug(doc)}/image.jpg`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/posts",
  documentTypes: [Post],
});
