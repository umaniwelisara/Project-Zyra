import React from "react";
import styles from "./OutfitGallery.module.css";
import Button from "./Button";

const OutfitGallery = () => {
  return (
    <section className={styles.outfitGallery}>
      <div className={styles.outfitGalleryContainer}>
        <div className={styles.outfitGalleryTitle}>Outfit Gallery</div>
        <div className={styles.outfitGalleryContent}>
          <img src="/outfitg.jpg" alt="Outfit" className={styles.ogImage} />
          <div className={styles.ogText}>
            <p>
              Discover the Outfit Gallery! Upload your wardrobe pieces, and
              we’ll help you complete the perfect outfit.
              <span className={styles.spacer} />
              Got trousers and shoes but no matching top? No problem – we’ll
              suggest the ideal match from our collection. Whether you’re
              dressing up for an event or refreshing your casual looks, Outfit
              Gallery makes it simple and fun.
              <span className={styles.spacer} />
              Explore, match, and shop – style has never been this easy!
            </p>
          </div>
        </div>
        <div className={styles.spacer2} />
        <Button type="primary">Let&apos;s Explore</Button>
      </div>
    </section>
  );
};

export default OutfitGallery;
