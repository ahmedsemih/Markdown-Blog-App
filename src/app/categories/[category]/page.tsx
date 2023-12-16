import { PostSection } from "@/components";
import { FeatureSection } from "@/components";
import { allPosts } from "contentlayer/generated";

type Props = {
  params: {
    category: string;
  };
};

const CategoryPage = ({ params }: Props) => {
  const posts = allPosts.filter((post) => post.categories.includes(params.category));
  const featuredPosts = posts.filter((post) => post.featured == true);

  return (
    <main className="container page">
      <FeatureSection posts={featuredPosts} category={params.category} />
      <PostSection posts={posts} category={params.category} />
    </main>
  );
};

export default CategoryPage;
