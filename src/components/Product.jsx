import React from "react";
import styles from "./Product.module.css";

const Product = ({ product, hasSubCategories }) => {
  const tags = [];

  if (product.tag) {
    tags.push(product.tag);
  }

  if (product.discount) {
    tags.push(product.discount);
  }

  return (
    <div className={styles.product}>
      <div className={styles.productImage}>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span className={styles.tag} key={`${product.name}-${index}`}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <img src={`/categories/${product.image}`} alt="Product" />
        {product.ecoFriendly && (
          <div className={styles.ecoFriendly}>
            <img src="eco-friendly.png" alt="Eco-Friendly Label" />
          </div>
        )}
      </div>
      <div className={styles.productInfo}>
        {hasSubCategories ? (
          <h4 className={styles.productCategoryName}>{product.name}</h4>
        ) : (
          <h3 className={styles.productName}>{product.name}</h3>
        )}

        <div className={styles.priceInfo}>
          <span className={styles.productPrice}>{product.price}</span>
          {product.originalPrice && (
            <span className={styles.productOriginalPrice}>
              {product.originalPrice}
            </span>
          )}
        </div>
        <div className={styles.productColors}>
          {product.colors &&
            product.colors.map((color, index) => (
              <div
                key={`${product.name}-${index}`}
                className={styles.productColor}
                style={{ backgroundColor: color }}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
