import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { useColorMode } from '@docusaurus/theme-common';

import styles from './index.module.css';

function HomepageHeader() {
  const { colorMode } = useColorMode();
  const logoSrc = colorMode === 'dark' ? '/img/japanese-bootcamp-logo-dark.png' : '/img/japanese-bootcamp-logo.png';
  
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="text--center">
          <img 
            src={logoSrc} 
            alt="Japanese Bootcamp Logo" 
            style={{ width: '300px', marginBottom: '2rem' }} 
          />
        </div>
        {/* <Heading as="h1" className="hero__title text--center">
          JAPANESE BOOTCAMP
        </Heading> */}
        <p className="hero__subtitle text--center">
          JLPT N2 & BUSINESS LEVEL CONVERSATION SKILLS
        </p>
        <p className="text--center" style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
          Achieve fluency in just 8 months with our intensive program
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            View the Complete Learning Plan →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Japanese Bootcamp - Hardcore Learning Program"
      description="Achieve JLPT N2 and Business-level Japanese in just 8 months with our intensive learning program">
      <HomepageHeader />
      <main className={clsx('hero hero--primary', styles.heroBanner)}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
