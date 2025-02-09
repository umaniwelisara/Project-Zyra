import { useState } from "react";
import styles from "./PriceRangeSlider.module.css";

const PriceRangeSlider = ({ min, max, onChange }) => {
  const [range, setRange] = useState([min, max]);

  const handleChange = (e, index) => {
    const value = Number(e.target.value);
    const newRange = [...range];

    if (index === 0) {
      newRange[0] = Math.min(value, newRange[1] - 12); // Ensure min thumb stays at least 12 units below max
    } else {
      newRange[1] = Math.max(value, newRange[0] + 12); // Ensure max thumb stays at least 12 units above min
    }

    setRange(newRange);
  };

  const handleRelease = () => {
    onChange(range); // Fire event only when user releases the slider
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
          className={styles.progress}
          style={{ left: `${left}%`, width: `${right - left}%` }}
        ></div>

        {/* Sliders */}
        <input
          type="range"
          min={min}
          max={max}
          value={range[0]}
          onChange={(e) => handleChange(e, 0)}
          onMouseUp={handleRelease}
          onTouchEnd={handleRelease}
          className={styles.slider}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={range[1]}
          onChange={(e) => handleChange(e, 1)}
          onMouseUp={handleRelease}
          onTouchEnd={handleRelease}
          className={styles.slider}
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
