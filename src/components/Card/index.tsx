import moment from "moment";
import Link from "next/link";
import Image from "next/image";

import styles from "./Card.module.css";
import { Post } from "contentlayer/generated";
import shortenString from "@/utils/shortenString";

type Props = {
  post: Post;
};

const Card = ({ post }: Props) => {
  return (
    <div className={styles.card}>
      <Link href={`/posts/${post.slug}`} className={styles.cardBody}>
        <article className={styles.cardArticle}>
          <h2 className={styles.cardTitle}>{post.title}</h2>
          <p className={styles.cardIntro}>{shortenString(post.intro, 97)}</p>
        </article>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.cardImage}
            src={post.image}
            alt={post.title}
            width={200}
            height={200}
          />
        </div>
      </Link>
      <div className={styles.cardFooter}>
        <Link href={`/posts/${post.slug}`} className={styles.cardInfo}>
          <Image
            className={styles.authorImage}
            src={post.authorImage}
            alt={post.author}
            width={100}
            height={100}
          />
          <span className={styles.authorName}>{post.author}</span>
          <span className={styles.dash}>-</span>
          <span className={styles.date}>
            {moment(post.publishedAt).fromNow()}
          </span>
        </Link>
        <Link
          className={styles.categoryLink}
          key={post.category}
          href={`/categories/${post.category}`}
          title={post.category}
        >
          {post.category}
        </Link>
      </div>
    </div>
  );
};

export default Card;
