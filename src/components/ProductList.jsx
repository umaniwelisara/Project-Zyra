import React from "react";
import styles from "./ProductList.module.css";
import Product from "./Product";

const ProductList = ({ products, customStyles, hasSubCategories }) => {
  const productsPerRow = 5;

  return (
    <div className={styles.productsList} style={customStyles}>
      {products.slice(0, productsPerRow).map((product, index) => (
        <Product
          key={index}
          product={product}
          hasSubCategories={hasSubCategories}
        />
      ))}
    </div>
  );
};

export default ProductList;
