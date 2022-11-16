import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import { Tween, SplitWords } from "react-gsap";
export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <Tween from={{ x: "200px" }} stagger={0.5} ease="elastic.out(0.1, 0.1)">
          <SplitWords
            wrapper={
              <div style={{ display: "inline-block", fontSize: "40px" }} />
            }
          >
            貓 鼻 頭 露 營 莊 園
          </SplitWords>
        </Tween>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            立即體驗
          </Link>
        </div>
      </div>
    </header>
  );
}
