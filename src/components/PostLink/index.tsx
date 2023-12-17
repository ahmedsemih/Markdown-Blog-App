import moment from "moment";
import Link from "next/link";
import Image from "next/image";

import styles from "./PostLink.module.css";
import { allPosts } from "contentlayer/generated";

type Props = {
  slug: string;
};

const PostLink = ({ slug }: Props) => {
  const post = allPosts.find((post) => post.slug === slug);

  if (post)
    return (
      <Link className={styles.link} href={`/posts/${post.slug}`}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={post?.image!}
            alt={post?.title!}
            width={500}
            height={500}
          />
        </div>
        <div className={styles.info}>
          <h6 className={styles.title}>{post.title}</h6>
          <p className={styles.date}>
            {moment(post.publishedAt).format("MMMM DD, YYYY")}
          </p>
        </div>
      </Link>
    );
};

export default PostLink;
