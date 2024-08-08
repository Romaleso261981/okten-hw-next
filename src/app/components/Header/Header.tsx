import React from "react";

import styles from "./Header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.mainLogo}>Logo</div>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Main</Link>
            <Link href={"/users"}>Users</Link>
            <Link href={"/posts"}>Posts</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
};
