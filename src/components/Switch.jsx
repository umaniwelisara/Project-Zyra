import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Switch.module.css";

const Switch = ({ onText, offText, onChange }) => {
  const [isOn, setIsOn] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(0);

  const onTextRef = useRef(null);
  const offTextRef = useRef(null);

  const calculateWidths = useCallback(() => {
    if (onTextRef.current && offTextRef.current) {
      const activeLabelWidth = isOn
        ? offTextRef.current.offsetWidth
        : onTextRef.current.offsetWidth;
      setSliderWidth(activeLabelWidth);
    }
  }, [isOn]);

  const toggleSwitch = () => {
    setIsOn((prev) => {
      const newState = !prev;

      if (onChange) {
        onChange(newState);
      }

      return newState;
    });
  };

  useEffect(() => {
    const handleFontLoad = () => {
      calculateWidths();
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(handleFontLoad);
    } else {
      handleFontLoad();
    }

    window.addEventListener("resize", calculateWidths);

    return () => {
      window.removeEventListener("resize", calculateWidths);
    };
  }, [onText, offText, calculateWidths]);

  useEffect(() => {
    calculateWidths();
  }, [isOn, calculateWidths]);

  return (
    <div className={styles.switch} onClick={toggleSwitch}>
      <div
        className={styles.slider}
        style={{
          transform: isOn
            ? `translateX(${onTextRef.current.offsetWidth}px)`
            : "translateX(0)",
          width: `${sliderWidth}px`,
        }}
      />
      <div
        ref={onTextRef}
        className={styles.label}
        style={{
          color: isOn
            ? "var(--color-text--secondary)"
            : "var(--color-text--light)",
        }}
      >
        {onText}
      </div>
      <div
        ref={offTextRef}
        className={styles.label}
        style={{
          color: isOn
            ? "var(--color-text--light)"
            : "var(--color-text--secondary)",
        }}
      >
        {offText}
      </div>
    </div>
  );
};

export default Switch;
