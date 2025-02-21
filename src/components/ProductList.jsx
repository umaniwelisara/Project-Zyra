import React from "react";
import styles from "./ProductList.module.css";
import Product from "./Product";
import { AG1 } from "../constants";

const ProductList = ({
  ageGroup,
  products,
  customStyles,
  hasSubCategories,
}) => {
  const productsPerRow = ageGroup == AG1 ? 5 : 4;

  return (
    <div className={styles.productsList} style={customStyles}>
      {products.slice(0, productsPerRow).map((product, index) => (
        <Product
          key={index}
          product={product}
          hasSubCategories={hasSubCategories}
          ageGroup={ageGroup}
        />
      ))}
    </div>
  );
};

export default ProductList;
