import React from "react";
import styles from "./IconButton.module.css";

const IconButton = ({ iconUrl, label, size = "S" }) => {
  const buttonClass = size === "XL" ? styles.XLarge : null;
  const iconClass = size === "XL" ? styles.iconXLarge : null;
  const labelClass =
    size === "XL"
      ? styles.labelXLarge
      : size === "L"
      ? styles.labelLarge
      : styles.labelSmall;

  return (
    <button className={`${styles.iconButton} ${buttonClass}`}>
      <img src={iconUrl} alt="icon" className={`${styles.icon} ${iconClass}`} />
      <div className={`${styles.label} ${labelClass}`}>{label}</div>
    </button>
  );
};

export default IconButton;
