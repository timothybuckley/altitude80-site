'use client';

import Image from 'next/image';
import styles from '../styles/CardsSection.module.css';

const CardSection = () => {
  return (
    <div className={`${styles.grid} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8`}>
      <div className={`${styles.card} bg-white rounded-lg shadow-md overflow-hidden`}>
        <img src="/technology-image.png" alt="Technology" className={`${styles.cardImage} w-full`} />
        <div className={`${styles.cardContent} p-4`}>
          <h2 className={`${styles.cardTitle} text-xl font-bold mb-2`}>Technology</h2>
          <p className={`${styles.cardSubtitle} text-gray-500 mb-2`}>Subtitle for Technology</p>
          <p className={`${styles.cardText} mb-4`}>Explore our cutting-edge technology solutions.</p>
          <a
            href="/technology"
            className={`${styles.cardLink} inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          >
            Read More
          </a>
        </div>
      </div>
      {/* Add other card components here */}
    </div>
  );
};

export default CardSection;