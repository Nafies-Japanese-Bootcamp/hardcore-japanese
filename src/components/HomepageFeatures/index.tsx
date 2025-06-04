import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageUrl: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Zero to N2 in 8 Months',
    imageUrl: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        <strong>Hardcore Mode Activated:</strong> Our intensive program takes you from absolute beginner 
        to JLPT N2 certification and business-level Japanese in just 8 months. 
        No prior knowledge required - just dedication and consistency.
      </>
    ),
  },
  {
    title: 'Three-Phase Learning Strategy',
    imageUrl: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        <ul>
          <li><strong>Phase 1:</strong> Foundation of Fire (3 months)</li>
          <li><strong>Phase 2:</strong> Speed Climb (3 months)</li>
          <li><strong>Phase 3:</strong> Business Samurai (2 months)</li>
        </ul>
        Each phase has specific goals, resources, and milestones to ensure steady progress.
      </>
    ),
  },
  {
    title: 'Proven Resources & Methods',
    imageUrl: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        Our program integrates the most effective learning tools including Minna no Nihongo, 
        Bunpro, Anki, WaniKani, and structured conversation practice through HelloTalk and iTalki. 
        Follow our roadmap for guaranteed results.
      </>
    ),
  },
];

function Feature({title, imageUrl, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={imageUrl} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
