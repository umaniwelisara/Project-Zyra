import React from "react";
import styles from "./Categories.module.css";
import IconButton from "./IconButton";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const shopByProduct = () => {
    navigate("/products");
  };

  return (
    <section className={styles.categories}>
      <IconButton
        size="XL"
        iconUrl="/categories/hot-sales.png"
        label="Hot Sales"
      />
      <IconButton
        size="XL"
        iconUrl="/categories/by-product.png"
        label="Shop by Product"
        onClick={shopByProduct}
      />
      <IconButton
        size="XL"
        iconUrl="/categories/by-size.png"
        label="Shop by Size"
      />
      <IconButton
        size="XL"
        iconUrl="/categories/by-occasion.png"
        label="Shop by Occasion"
      />
      <IconButton
        size="XL"
        iconUrl="/categories/eco-friendly.png"
        label="Eco-friendly"
      />
      <IconButton
        size="XL"
        iconUrl="/categories/help-info.png"
        label="Help & Info"
      />
    </section>
  );
};

export default Categories;
