"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from "./Menu.module.css";
import MenuIcon from "/public/menu.svg";
import { categories } from "@/utils/constants";

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.menuWrapper}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.menuButton}
      >
        <Image src={MenuIcon} alt="menu-icon" />
      </button>
      {isOpen && (
        <menu className={styles.menuBody}>
          {categories.map((category) => (
            <Link
              className={styles.menuLink}
              key={category.name}
              title={category.title}
              href={`/category${category.link}`}
            >
              {category.name}
            </Link>
          ))}
        </menu>
      )}
    </div>
  );
};

export default Menu;
