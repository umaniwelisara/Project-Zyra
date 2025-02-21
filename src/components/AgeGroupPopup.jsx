import React, { useContext, useEffect, useState } from "react";
import styles from "./AgeGroupPopup.module.css";
import AgeGroupContext from "../context/AgeGroupContext";

const AgeGroupPopup = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [rememberChoice, setRememberChoice] = useState(true);
  const { updateAgeGroup } = useContext(AgeGroupContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleChoice = (choice) => {
    if (rememberChoice) {
      updateAgeGroup(choice);
    }
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`${styles.popupContainer} ${isVisible ? styles.visible : ""}`}
    >
      <div className={`${styles.popup} ${styles.gradientBorder}`}>
        <button
          className={styles.closeButton}
          onClick={() => handleChoice("youthful")}
          aria-label="Close"
        >
          ✕
        </button>

        <div className={styles.popupContent}>
          <h2 className={styles.popupTitle}>
            WELCOME TO{" "}
            <span className={styles.brandName}>
              <img src="/logo.svg" alt="Logo" className={styles.logo} />
            </span>
          </h2>

          <div className={styles.popupText}>
            <p>Help us personalize your shopping experience.</p>
            <p>
              Selecting your <span className={styles.italic}>age group</span>{" "}
              allows us to show you the most fitting shopping experience.
            </p>
          </div>

          <div className={styles.buttonGroup}>
            <button
              className={styles.choiceButton}
              onClick={() => handleChoice("youthful")}
            >
              Youthful
            </button>
            <button
              className={styles.choiceButton}
              onClick={() => handleChoice("graceful")}
            >
              Graceful
            </button>
          </div>

          <div className={styles.rememberChoice}>
            <input
              type="checkbox"
              id="remember"
              checked={rememberChoice}
              onChange={(e) => setRememberChoice(e.target.checked)}
            />
            <label htmlFor="remember">Remember my choice</label>
          </div>

          <button
            className={styles.skipButton}
            onClick={() => handleChoice("youthful")}
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeGroupPopup;
