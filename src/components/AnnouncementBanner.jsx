import React from "react";

import styles from "./AnnouncementBanner.module.css";

const AnnouncementBanner = () => {
  return (
    <div className={styles.banner}>
      25% off your style favourites – use code: SAVE25!
    </div>
  );
};

export default AnnouncementBanner;
