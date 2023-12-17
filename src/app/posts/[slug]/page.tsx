import moment from "moment";
import Image from "next/image";
import type { Metadata } from "next";

import styles from "./page.module.css";
import { MdxWrapper } from "@/components";
import getAuthorImage from "@/utils/getAuthorImage";
import { Post, allPosts } from "contentlayer/generated";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title, author, image, intro } = allPosts.find(
    (post) => post.slug === params.slug
  ) as Post;

  return {
    title: title + ` | by ${author} | Typewriter`,
    description: intro,
    openGraph: {
      images: [image],
    },
  };
}

const PostPage = ({ params }: Props) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  const { title, intro, publishedAt, author, image, body } = post!;

  return (
    <main className="container page">
      <section className={styles.postIntro}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.authorInfo}>
          {post?.image && (
            <Image
              className={styles.authorImage}
              src={getAuthorImage(author)!}
              alt={author}
              width={200}
              height={200}
            />
          )}
          <div>
            <p className={styles.authorName}>{author}</p>
            <p className={styles.date}>
              {moment(publishedAt).format("MMMM DD, YYYY")}
            </p>
          </div>
        </div>
        <p className={styles.intro}>{intro}</p>
        <Image
          className={styles.postImage}
          src={image}
          alt={title}
          width={1000}
          height={600}
        />
      </section>
      <article className={styles.article}>
        <MdxWrapper code={body.code} />
      </article>
    </main>
  );
};

export default PostPage;
