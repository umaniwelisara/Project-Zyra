import React from "react";
import styles from "./Product.module.css";
import { AG1 } from "../constants";

const Product = ({ product, hasSubCategories, ageGroup }) => {
  const tags = [];

  if (product.tag) {
    tags.push(product.tag);
  }

  if (product.discount) {
    tags.push(product.discount);
  }

  return (
    <div className={styles.product}>
      <div
        className={`${styles.productImage} ${
          ageGroup == AG1 ? styles.imgOpt1 : styles.imgOpt2
        }`}
      >
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span
                className={`${styles.tag} ${
                  ageGroup == AG1 ? styles.tagOpt1 : styles.tagOpt2
                }`}
                key={`${product.name}-${index}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <img src={`/categories/${product.image}`} alt="Product" />
        {product.ecoFriendly && (
          <div
            className={`${styles.ecoFriendly} ${
              ageGroup == AG1 ? styles.ecoFriendlyOpt1 : styles.ecoFriendlyOpt2
            }`}
          >
            <img src="eco-friendly.png" alt="Eco-Friendly Label" />
          </div>
        )}
      </div>
      <div className={styles.productInfo}>
        {hasSubCategories ? (
          <h4
            className={`${styles.productCategoryName} ${
              ageGroup == AG1
                ? styles.productCategoryNameOpt1
                : styles.productCategoryNameOpt2
            }`}
          >
            {product.name}
          </h4>
        ) : (
          <h3
            className={`${styles.productName} ${
              ageGroup == AG1 ? styles.productNameOpt1 : styles.productNameOpt2
            }`}
          >
            {product.name}
          </h3>
        )}

        <div className={styles.priceInfo}>
          <span
            className={`${styles.productPrice} ${
              ageGroup == AG1
                ? styles.productPriceOpt1
                : styles.productPriceOpt2
            }`}
          >
            {product.price}
          </span>
          {product.originalPrice && (
            <span
              className={`${styles.productOriginalPrice} ${
                ageGroup == AG1
                  ? styles.productOriginalPriceOpt1
                  : styles.productOriginalPriceOpt2
              }`}
            >
              {product.originalPrice}
            </span>
          )}
        </div>
        <div className={styles.productColors}>
          {product.colors &&
            product.colors.map((color, index) => (
              <div
                key={`${product.name}-${index}`}
                className={`${styles.productColor} ${
                  ageGroup == AG1
                    ? styles.productColorOpt1
                    : styles.productColorOpt2
                }`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
