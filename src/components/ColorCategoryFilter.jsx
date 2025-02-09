import { useEffect, useState } from "react";
import styles from "./ColorCategoryFilter.module.css";

const ColorCategoryFilter = ({ products, selectedColors = [], onChange }) => {
  // Extract unique colors from products
  const uniqueColors = Array.from(
    new Set(products.flatMap((p) => p.colorCategory))
  );

  const [selected, setSelected] = useState(selectedColors);

  // Only update state when selectedColors actually change
  useEffect(() => {
    if (JSON.stringify(selected) !== JSON.stringify(selectedColors)) {
      setSelected(selectedColors);
    }
  }, [selectedColors, selected]);

  const handleColorClick = (color) => {
    const updatedSelection = selected.includes(color)
      ? selected.filter((c) => c !== color)
      : [...selected, color];

    setSelected(updatedSelection);
    onChange(updatedSelection);
  };

  return (
    <div className={styles.grid}>
      {uniqueColors.map((color) => (
        <button
          key={color}
          className={`${styles.colorButton} ${
            selected.includes(color) ? styles.selected : ""
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
