import styles from "./CategoryPage.module.css";
import { Card, FeatureSection } from "@/components";
import { Post, allPosts } from "contentlayer/generated";

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
      <section className={styles.section}>
        <h1 className={styles.title}>All Posts</h1>
        <p className={styles.subTitle}>
          All posts in the {params.category} category.
        </p>
        <div className={styles.posts}>
          {posts?.length > 0 ? (
            posts.map((post: Post) => <Card key={post._id} post={post} />)
          ) : (
            <p className={styles.noPost}>
              There are no posts under this category.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
