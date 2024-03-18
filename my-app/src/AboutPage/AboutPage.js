import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = ({ title, descr }) => {
  return (
    <div className={styles.about}>
      <h1>{title}</h1>
      <p>{descr}</p>
    </div>
  );
};

export default AboutPage;