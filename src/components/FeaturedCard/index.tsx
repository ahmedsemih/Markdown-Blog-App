import moment from "moment";
import Link from "next/link";
import Image from "next/image";

import { Post } from "contentlayer/generated";
import styles from "./FeaturedCard.module.css";
import shortenString from "@/utils/shortenString";
import getAuthorImage from "@/utils/getAuthorImage";

type Props = {
  post: Post;
};

const FeaturedCard = ({ post }: Props) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.card}>
      <div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.cardImage}
            src={post.image}
            alt={post.title}
            loading="eager"
            width={500}
            height={300}
          />
        </div>
        <h2 className={styles.cardTitle}>{post.title}</h2>
        <p className={styles.cardIntro}>{shortenString(post.intro, 137)}</p>
      </div>
      <div className={styles.authorInfo}>
        <Image
          className={styles.authorImage}
          src={getAuthorImage(post.author)!}
          alt={post.author}
          width={100}
          height={100}
        />
        <div>
          <p className={styles.authorName}>{post.author}</p>
          <p className={styles.date}>
            {moment(post.publishedAt).format("MMMM DD, YYYY")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
