import { Post } from "contentlayer/generated";
import Image from "next/image";
import React from "react";
import styles from "./FeaturedCard.module.css";
import Link from "next/link";
import getAuthorImage from "@/utils/getAuthorImage";
import moment from "moment";
import shortenString from "@/utils/shortenString";

type Props = {
  post: Post;
};

const FeaturedCard = ({ post }: Props) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.card}>
      <div>
        <Image
          className={styles.cardImage}
          src={post.image}
          alt={post.title}
          width={500}
          height={500}
        />
        <h6 className={styles.cardTitle}>{post.title}</h6>
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
