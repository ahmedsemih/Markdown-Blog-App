import { Metadata } from "next";

import { PostSection } from "@/components";
import { FeatureSection } from "@/components";
import { categories } from "@/utils/constants";
import { allPosts } from "contentlayer/generated";

type Props = {
  params: {
    category: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categories.find(category => category.name.toLowerCase() === params.category.toLowerCase());

  return {
    title: `${category?.title} | Typewriter`,
  };
}

const CategoryPage = ({ params }: Props) => {
  const posts = allPosts.filter((post) => post.category === params.category);
  const featuredPosts = posts.filter((post) => post.featured == true);

  return (
    <main className="container page">
      <FeatureSection posts={featuredPosts} category={params.category} />
      <PostSection posts={posts} category={params.category} />
    </main>
  );
};

export default CategoryPage;
