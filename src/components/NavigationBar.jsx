import React from "react";
import IconButton from "./IconButton";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <section className={styles.navbar}>
      <div className={styles.navContent}>
        <img src="/logo.svg" alt="Logo" className={styles.logo} />
        <div className={styles.menu}>
          <span className={`${styles.menuItem} ${styles.active}`}>WOMEN</span>
          <span className={`${styles.menuItem} ${styles.inactive}`}>MEN</span>
        </div>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search by product name or keyword..."
            className={styles.searchInput}
          />
          <img
            src="/search.svg"
            alt="magnifying-glass-icon"
            className={styles.searchIcon}
          />
        </div>
      </div>

      <div className={styles.navActions}>
        <IconButton size="L" iconUrl="/closet.svg" label="Outfit Gallery" />
        <IconButton size="L" iconUrl="/bag.svg" label="Bag" />
        <IconButton size="L" iconUrl="/favorites.svg" label="Favorites" />
        <IconButton size="L" iconUrl="/sign-in.svg" label="Sign In" />
      </div>
    </section>
  );
};

export default NavigationBar;
