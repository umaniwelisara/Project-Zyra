import { useState } from "react";
import styles from "./ColorCategoryFilter.module.css";

const ColorCategoryFilter = ({ products, onChange }) => {
  // Extract unique colors from products
  const uniqueColors = Array.from(
    new Set(products.flatMap((p) => p.colorCategory))
  );

  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorClick = (color) => {
    const updatedSelection = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];

    setSelectedColors(updatedSelection);
    onChange(updatedSelection);
  };

  return (
    <div className={styles.grid}>
      {uniqueColors.map((color) => (
        <button
          key={color}
          className={`${styles.colorButton} ${
            selectedColors.includes(color) ? styles.selected : ""
          }`}
          onClick={() => handleColorClick(color)}
        >
          <span
            className={styles.colorDot}
            style={{ backgroundColor: color.toLowerCase() }}
          />
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ColorCategoryFilter;
