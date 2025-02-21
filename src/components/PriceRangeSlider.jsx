import { useEffect, useState } from "react";
import styles from "./PriceRangeSlider.module.css";

const PriceRangeSlider = ({
  min,
  max,
  selectedRange,
  onChange,
  isProductsPage,
}) => {
  const [range, setRange] = useState(selectedRange ?? [min, max]);

  useEffect(() => {
    if (Array.isArray(selectedRange) && selectedRange.length === 2) {
      setRange(selectedRange);
    } else {
      setRange([min, max]); // Default to min/max if undefined
    }
  }, [selectedRange, min, max]);

  const handleChange = (e, index) => {
    const value = Number(e.target.value);
    const newRange = [...range];

    if (index === 0) {
      newRange[0] = Math.min(value, newRange[1] - 12); // Prevent overlap
    } else {
      newRange[1] = Math.max(value, newRange[0] + 12);
    }

    setRange(newRange);
  };

  const handleRelease = () => {
    onChange(range);
  };

  const left = ((range[0] - min) / (max - min)) * 100;
  const right = ((range[1] - min) / (max - min)) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.sliderWrapper}>
        {/* Default Track */}
        <div className={styles.track}></div>
        {/* Progress Line Between Dots */}
        <div
          className={`${styles.progress} ${
            isProductsPage ? styles.progressB : ""
          }`}
          style={{ left: `${left}%`, width: `${right - left}%` }}
        ></div>

        {/* Sliders */}
        <input
          type="range"
          min={min}
          max={max}
          value={range[0] ?? min} // Ensure value is never undefined
          onChange={(e) => handleChange(e, 0)}
          onMouseUp={handleRelease}
          onTouchEnd={handleRelease}
          className={`${styles.slider} ${isProductsPage ? styles.sliderB : ""}`}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={range[1] ?? max} // Ensure value is never undefined
          onChange={(e) => handleChange(e, 1)}
          onMouseUp={handleRelease}
          onTouchEnd={handleRelease}
          className={`${styles.slider} ${isProductsPage ? styles.sliderB : ""}`}
        />
      </div>
      <div className={styles.priceValues}>
        <span>€ {range[0]}</span>
        <span>€ {range[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
