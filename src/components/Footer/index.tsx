import Link from "next/link";
import Image from "next/image";

import Logo from "/public/logo.png";
import styles from "./Footer.module.css";
import { categories } from "@/utils/constants";

const Footer = () => {
  return (
    <footer className="container">
      <div className={styles.topSide}>
        <section className={styles.leftSide}>
          <Image 
            className={styles.logo} 
            src={Logo} 
            alt="typewriter-logo" 
          />
          <p className={styles.info}>
            Typewriter is a static blog website. All blog posts created with
            markdown. Built with Nextjs, Mdx and Contentlayer.
          </p>
        </section>
        <section className={styles.rightSide}>
          <div className={styles.list}>
            <h5 className={styles.listTitle}>Tech Stack</h5>
            <Link
              className={styles.listLink}
              target="_blank"
              href="https://react.dev/"
            >
              React
            </Link>
            <Link
              className={styles.listLink}
              target="_blank"
              href="https://nextjs.org/"
            >
              NextJS
            </Link>
            <Link
              className={styles.listLink}
              target="_blank"
              href="https://mdxjs.com/"
            >
              MDX
            </Link>
            <Link
              className={styles.listLink}
              target="_blank"
              href="https://contentlayer.dev/"
            >
              Contentlayer
            </Link>
          </div>
          <div className={styles.list}>
            <h5 className={styles.listTitle}>Categories</h5>
            {categories.map((category) => (
              <Link
                className={styles.listLink}
                key={category.name}
                href={category.link}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
      <section className={styles.bottomSide}>
        <p>© 2023 Typewriter, Inc.</p>
        <p>
          Created by
          <Link
            className={styles.github}
            href="https://github.com/ahmedsemih"
            target="_blank"
          >
            Ahmed Semih Erkan
          </Link>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
