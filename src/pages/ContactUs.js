import React from 'react';
import Footer from '../components/Footer';
import styles from './Home.module.css';

const ContactUs = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.backgroundOverlay}></div>
      {/* Floating Contact Information Card */}
      <div className={styles.contactInfoCard}>
        <h2 className={styles.cardTitle}>Contact Us</h2>
        <div className={styles.cardItem}>
          {/* <FaEnvelope className={styles.cardIcon} /> */}
          <p className={styles.cardText}><strong>Email:</strong> drpriya@ayurvaidyaa.com</p>
        </div>
        <div className={styles.cardItem}>
          {/* <FaPhone className={styles.cardIcon} /> */}
          <p className={styles.cardText}><strong>Phone:</strong> +91 9818655923</p>
        </div>
        <div className={styles.cardItem}>
          {/* <FaMapMarkerAlt className={styles.cardIcon} /> */}
          <p className={styles.cardText}><strong>Address:</strong> 551, Second Floor, Sector 8 ,Panchkula Haryana -134109</p>
        </div>
      </div>

      <Footer />  {/* Add the Footer component */}
    </div>
  );
};

export default ContactUs;
