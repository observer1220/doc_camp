import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

function HomepageHeader () {
  const { siteConfig } = useDocusaurusContext();
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
      <Carousel afterChange={onChange} autoplay effect="fade" dotPosition="right">
        <img src='./img/camp/a-4.jpg' />
        <img src='./img/camp/b-4.jpg' />
        <img src='./img/camp/c-3.jpg' />
        <img src='./img/camp/d-2.jpg' />
        <img src='./img/camp/e-5.jpg' />
        <img src='./img/camp/f-5.jpg' />
      </Carousel>
      {/* <HomepageHeader /> */}
      <main>
        <HomepageFeatures />
      </main>

    </Layout>
  );
}
