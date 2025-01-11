import React from "react";
import styles from "./AppPromotion.module.css";

const AppPromotion = () => {
  return (
    <section className={styles.appPromotion}>
      <div className={styles.outerContainer}>
        <div className={styles.logoContainer}>
          <img src="/logo.svg" alt="Logo" className={styles.logo} />
          <span className={styles.appText}>
            Your perfect companion is just a tap away download the app now!
          </span>
        </div>
        <div className={styles.downloadContainer}>
          <button className={styles.downloadButton}>DOWNLOAD NOW</button>
          <span className={styles.or}>OR</span>
          <div className={styles.qrCode}></div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
