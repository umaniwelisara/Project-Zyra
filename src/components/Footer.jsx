import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const otherFlags = [
    "germany",
    "france",
    "italy",
    "spain",
    "poland",
    "netherlands",
    "sweden",
    "belgium",
    "austria",
    "denmark",
  ];

  return (
    <section className={styles.footer}>
      <div className={styles.upperFooter}>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>About</h2>
          <div className={styles.sectionText}>
            <span>Company</span>
            <span>Business Relation</span>
            <span className={styles.highlightedText}>CONTACT US</span>
            <span>companyname@gmail.com</span>
            <span>+1-2345-6789</span>
            <span>123 Ave, Current City, Country</span>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Help</h2>
          <div className={styles.sectionText}>
            <span>Contact Us</span>
            <span>FAQ</span>
            <span>Customer Support</span>
            <span>Track Order</span>
            <span>Delivery and Return</span>
            <span>Payment Methods</span>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Shopping From</h2>
          <div className={styles.currentRegion}>
            <span>You are in</span>
            <img src="/flags/finland.png" alt="Flag" className={styles.flag} />
            <span>CHANGE</span>
          </div>
          <h4 className={styles.otherCountriesTitle}>
            Some of the International Sites:
          </h4>
          <div className={styles.otherCountries}>
            {otherFlags.map((flag) => (
              <img
                key={flag}
                src={`/flags/${flag}.png`}
                alt={`${flag} flag`}
                className={styles.flag}
              />
            ))}
          </div>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Social Media</h2>
          <div className={styles.iconContainer}>
            <img
              src={`/fb.png`}
              alt={`Facebook logo`}
              className={styles.flag}
            />
            <img
              src={`/inst.png`}
              alt={`Intagram logo`}
              className={styles.flag}
            />
            <img
              src={`/twitter.png`}
              alt={`Twitter logo`}
              className={styles.flag}
            />
          </div>
          <h4 className={styles.otherCountriesTitle}>Get the App</h4>
          <img
            src={`/appstore.png`}
            alt={`App Store logo`}
            className={styles.appStore}
          />
          <div className={styles.spacer}></div>
          <img
            src={`/playstore.png`}
            alt={`Play Store logo`}
            className={styles.appStore}
          />
        </div>
      </div>

      <div className={styles.lowerFooter}>
        <span>©2024 Company Name. All rights reserved</span>
        <div className={styles.policyAndTerms}>
          <a className={styles.link}>Privacy & Policy</a>{" "}
          &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
          <a className={styles.link}>Terms & Conditions</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
