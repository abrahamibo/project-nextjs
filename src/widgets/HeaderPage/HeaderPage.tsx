import React from "react";
import styles from "./HeaderPage.module.scss";

export default function HeaderPage() {
  return (
    <header className={styles.container}>
      <h1 className="title">
        Welcome to
        <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </header>
  );
}
