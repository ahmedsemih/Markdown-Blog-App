import FeaturedCard from "../FeaturedCard";
import { Post } from "contentlayer/generated";
import styles from "./FeatureSection.module.css";

type Props = {
  posts: Post[];
  category?: string;
};

const FeatureSection = ({ posts, category }: Props) => {
  if (posts.length > 0) {
    const firstTwoPosts = posts.slice(0, 2);

    return (
      <section className={styles.section}>
        <h1 className={styles.title}>Featured Posts</h1>
        <p className={styles.subTitle}>
          {category
            ? `Featured posts by curators in the ${category} category.`
            : "Featured posts by curators."}
        </p>
        <div className={styles.cards}>
          {firstTwoPosts.map((post) => (
            <FeaturedCard key={post._id} post={post} />
          ))}
        </div>
      </section>
    );
  }
};

export default FeatureSection;
