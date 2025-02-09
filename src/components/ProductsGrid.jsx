import React from "react";
import styles from "./ProductsGrid.module.css";
import Product from "./Product";

const ProductsGrid = ({ products }) => {
  return (
    <div className={styles.grid}>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
