import { Card } from "..";
import { Post } from "contentlayer/generated";
import styles from "./PostSection.module.css";

type Props = {
  posts: Post[];
  category?: string;
};

const PostSection = ({ posts, category }: Props) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>All Posts</h1>
      <p className={styles.subTitle}>
        {category
          ? `All posts in the ${category} category.`
          : `All posts written by our authors.`}
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
  );
};

export default PostSection;
