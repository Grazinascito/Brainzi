import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img style={{ width: "50px" }} src="../img/brain.png" alt="" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p> </p>
        <p className="hero__subtitle">
          this doc is made to share my learnings about software development.
          Inspired by @biantris_
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/about">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
    </Layout>
  );
}
