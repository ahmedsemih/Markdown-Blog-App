import Link from "next/link";
import Image from "next/image";

import Logo from "/public/logo.png";
import { Menu } from "@/components";
import Symbol from "/public/symbol.png";
import styles from "./Navbar.module.css";
import { categories } from "@/utils/constants";

const Navbar = () => {
  return (
    <header className="container sticky">
      <nav className={styles.navbar}>
        <Link href="/">
          <Image 
            className={styles.logo} 
            src={Logo} 
            alt="typewriter-logo" 
          />
          <Image
            className={styles.symbol}
            src={Symbol}
            alt="typewriter-symbol"
          />
        </Link>
        <div className={styles.linkArea}>
          {categories.map((category) => (
            <Link
              className={styles.navlink}
              key={category.name}
              title={category.title}
              href={category.link}
            >
              {category.name}
            </Link>
          ))}
        </div>
        <Menu />
      </nav>
    </header>
  );
};

export default Navbar;
