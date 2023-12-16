import Link from "next/link";

import { categories } from "@/utils/constants";
import styles from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Welcome to Typewriter!</h1>
      <p className={styles.about}>
        Typewriter is a technology blog website written by our team. Our goal is
        to provide news and informative contents, usually related to technology.
      </p>
      <nav className={styles.categoryList}>
        {categories.map((category) => (
          <Link
            key={category.name}
            className={styles.categoryLink}
            href={category.link}
            title={category.title}
          >
            {category.name}
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default WelcomeSection;
