import React from "react";
import styles from "./FiltersBar.module.css";
import Accordion from "./Accordion";
import CheckboxList from "./CheckboxList";
import PriceRangeSlider from "./PriceRangeSlider";

const FiltersBar = ({ products, onFilterChange }) => {
  return (
    <div className={styles.filters}>
      <Accordion
        items={[
          {
            title: "Product",
            content: (
              <CheckboxList
                products={products}
                onChange={(selected) => onFilterChange({ type: selected })}
              />
            ),
          },
          {
            title: "Price",
            content: (
              <PriceRangeSlider
                min={10}
                max={80}
                onChange={(range) => onFilterChange({ price: range })}
              />
            ),
          },
          { title: "Colour", content: <p>Color Selection Here</p> },
        ]}
      />
    </div>
  );
};

export default FiltersBar;
