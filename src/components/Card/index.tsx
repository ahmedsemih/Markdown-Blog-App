import moment from "moment";
import Link from "next/link";
import Image from "next/image";

import styles from "./Card.module.css";
import { Post } from "contentlayer/generated";
import shortenString from "@/utils/shortenString";
import getAuthorImage from "@/utils/getAuthorImage";

type Props = {
  post: Post;
};

const Card = ({ post }: Props) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.card}>
      <div className={styles.cardBody}>
        <article className={styles.cardArticle}>
          <h6 className={styles.cardTitle}>{post.title}</h6>
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
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardInfo}>
          <Image
            className={styles.authorImage}
            src={getAuthorImage(post.author)!}
            alt={post.author}
            width={100}
            height={100}
          />
          <span className={styles.authorName}>{post.author}</span>
          <span className={styles.dash}>-</span>
          <span className={styles.date}>
            {moment(post.publishedAt).fromNow()}
          </span>
        </div>
        <Link
          className={styles.categoryLink}
          key={post.category}
          href={`/categories/${post.category}`}
          title={post.category}
        >
          {post.category}
        </Link>
      </div>
    </Link>
  );
};

export default Card;
