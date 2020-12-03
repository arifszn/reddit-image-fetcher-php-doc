import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import ReactiveButton from 'reactive-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    title: 'Reddit Images',
    description: (
      <>
        Fetch images from predefined subreddits or any given subreddits.
      </>
    ),
  },
  {
    title: 'Memes',
    description: (
      <>
        Get the fresh memes from popular subreddits in one line of code.
      </>
    ),
  },
  {
    title: 'Wallpapers',
    description: (
      <>
        It's always hard to find a nice wallpaper. Reddit Image Fetcher got that covered.
      </>
    ),
  },
  {
    title: 'Bulk',
    description: (
      <>
        Get single image or in bulk. Your call. 
      </>
    ),
  },
  {
    title: 'Customizable',
    description: (
      <>
        You have the ability to define your own subreddits library.
      </>
    ),
  },
  {
    title: 'Lightweight',
    description: (
      <>
        Extremely small in size. Less than 20 KB.
      </>
    ),
  }
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4 text--center p-4', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const [showGetStartedButton, setShowGetStartedButton] = useState(false);

  useEffect(() => {
    setShowGetStartedButton(true);
  }, []);

  return (
    <Layout
      description={`${siteConfig.tagline}`}>
      <header className={clsx('hero ', styles.heroBanner)}>
        <div className="container">
          <div className="text--center">
            <img
              alt="Reddit Image Fetcher"
              className={styles.logo}
              src={useBaseUrl('img/logo/logo.png')}
            />
        </div>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                '',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              <ReactiveButton
                style={{ display: showGetStartedButton ? 'block' : 'none' }}
                color={'dark'}
                size={"large"}
                idleText={<span>Get Started &nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight}/></span>}
                width={'170px'}
                height={'49px'}
                className={'fadeIn'}
              />
            </Link>
          </div>
        </div>
      </header>
      <div className={clsx(styles.announcement, styles.announcementDark)}>
          <div className={styles.announcementInner}>
            JavaScript version is available{' '}
            <a target="_blank" href="https://github.com/arifszn/reddit-image-fetcher">
              here
            </a>
            .
          </div>
        </div>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row justify-content-center">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;