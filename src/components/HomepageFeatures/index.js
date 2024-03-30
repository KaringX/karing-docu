import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Compatible with Clash, V2ray/V2fly, Sing-box, Shadowsocks, Sub, Github Subscriptions.
        Full clash config supported, Partial clash.meta config supported.
      </>
    ),
  },
  {
    title: 'Focus on Proxy Utility',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Karing supports applying a single set of rules across multiple subscription sources simultaneously.
      </>
    ),
  },
  {
    title: 'Powered by Flutter',
    Svg: require('@site/static/img/undraw_karing_fullter.svg').default,
    description: (
      <>
        Built with Flutter, delivers seamless performance across multiple platforms, ensuring consistency. Equipped with the Sing-box kernel by default, it guarantees superior performance.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
