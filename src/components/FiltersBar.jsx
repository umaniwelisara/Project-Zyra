import React from "react";
import styles from "./FiltersBar.module.css";
import Accordion from "./Accordion";

const FiltersBar = () => {
  return (
    <div className={styles.filters}>
      <Accordion
        items={[
          { title: "Product", content: <p>Product Filters Here</p> },
          { title: "Price", content: <p>Price Range Filter Here</p> },
          { title: "Colour", content: <p>Color Selection Here</p> },
        ]}
      />
    </div>
  );
};

export default FiltersBar;
