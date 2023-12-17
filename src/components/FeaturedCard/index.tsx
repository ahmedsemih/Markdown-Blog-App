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
        <div className={styles.imageWrapper}>
          <Image
            className={styles.cardImage}
            src={post.image}
            alt={post.title}
            width={500}
            height={500}
          />
        </div>
        <h6 className={styles.cardTitle}>{post.title}</h6>
        <p className={styles.cardIntro}>{shortenString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis dolorum dignissimos minima, ipsum animi similique repellendus quisquam quaerat beatae culpa, dolor quibusdam cupiditate quis. Nesciunt quia, ratione, minus ducimus possimus aspernatur explicabo itaque excepturi nam deleniti voluptates in non asperiores error dolorum facilis. Iure nam, sit accusantium quis totam quas, beatae mollitia voluptatum dolore hic maiores harum quod atque. Modi tempora cumque consequuntur suscipit nobis pariatur quam, facilis mollitia inventore placeat a optio, sit adipisci quis aliquam necessitatibus quisquam quo, corporis voluptates illo autem commodi ipsum maiores vitae. Consequuntur omnis eligendi id repellendus laboriosam culpa cupiditate adipisci officiis inventore.", 137)}</p>
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
