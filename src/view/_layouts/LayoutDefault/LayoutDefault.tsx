import React from "react";
import Head from "next/head";
import HeaderPage from "../../../widgets/HeaderPage/HeaderPage";
import FooterPage from "../../../widgets/FooterPage/FooterPage";
import styles from "./LayoutDefault.module.css";



export default function LayoutDefault({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderPage />

      {children}

      <FooterPage />
    </div>
  );
}
