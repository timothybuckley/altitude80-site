'use client';

import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-gray-800 py-4 text-center text-white`}>
      <p>&copy; 2024 altitude80. All rights reserved.</p>
    </footer>
  );
};

export default Footer;