import React from 'react';
import Footer from '../components/Footer';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.homeContent}>
        <h1 className={styles.homeTitle}>Ayurvaidyaa</h1>
        <p className={styles.homeDescription}>Balancing Wellness Naturally</p>
        <p className={styles.homeDescription}>Personalised Prakriti-based treatments</p>
        <button className={styles.learnMoreButton}>Coming Soon</button>
      </div>
      <Footer />  {/* Add the Footer component */}
    </div>
  );
};

export default Home;
