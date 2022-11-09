import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax } from 'react-parallax';

function HomepageHeader () {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            立即體驗
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home () {
  const { siteConfig } = useDocusaurusContext();

  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        {/* <Carousel afterChange={onChange} autoplay effect="fade" dotPosition="right">
          <img src='./img/camp/a-4.jpg' />
          <img src='./img/camp/b-4.jpg' />
          <img src='./img/camp/c-3.jpg' />
          <img src='./img/camp/d-2.jpg' />
          <img src='./img/camp/e-5.jpg' />
          <img src='./img/camp/f-5.jpg' />
          </Carousel> */}
      <HomepageHeader />
      <main>
        {/* <Parallax bgImage="./img/camp/a-4.jpg" blur={0} strength={1000} style={{ height: '300px' }}>
          Content goes here. Parallax height grows with content height.
        </Parallax> */}
        {/* <div data-aos="fade-up" > */}
          <HomepageFeatures />
        {/* </div> */}
      </main>
    </Layout>
  );
}
