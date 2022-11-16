import React, { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageHeader from "@site/src/components/HomepageHeader";
import CarouselComponent from "@site/src/components/Carousel";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import ParallaxComponent from "@site/src/components/Parallax";
import PersonInformation from "@site/src/components/PersonInformation";
import clsx from "clsx";
import styles from "./index.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import GSAP from "@site/src/components/GSAP";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {/* SEO優化用 */}
      {/* <Head>
        <meta property="og:image" content="image.png" />
      </Head> */}
      <HomepageHeader />
      {/* <CarouselComponent /> */}
      <main>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f64e5f7-19a5-471d-889e-65018dc18241/d4rj4lc-7fa63efc-84e3-417a-8c73-5f9bc6cc7e35.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmNjRlNWY3LTE5YTUtNDcxZC04ODllLTY1MDE4ZGMxODI0MVwvZDRyajRsYy03ZmE2M2VmYy04NGUzLTQxN2EtOGM3My01ZjliYzZjYzdlMzUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FgnS8TBwITHp8m1EWdFHE4bkdlQvy4JmYvtt_wjiYDc" />
        </div>
        {/* 視差元件 */}
        {/* <ParallaxComponent /> */}
        {/* <div data-aos="fade-up" > */}
        <HomepageFeatures />
        {/* </div> */}

        {/* <GSAP /> */}
        <PersonInformation />
      </main>
    </Layout>
  );
}
