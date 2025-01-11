import React from "react";
import styles from "./CategoryPreview.module.css";
import ProductList from "./ProductList";

const CategoryPreview = ({
  categoryName,
  products,
  bgColor,
  customStyles,
  hasSubCategories,
}) => {
  return (
    <section
      className={styles.categoryPreview}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <h3 className={styles.categoryName}>{categoryName}</h3>

      <ProductList
        products={products}
        customStyles={customStyles}
        hasSubCategories={hasSubCategories}
      />
    </section>
  );
};

export default CategoryPreview;
