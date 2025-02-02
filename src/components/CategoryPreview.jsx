import React from "react";
import styles from "./CategoryPreview.module.css";
import ProductList from "./ProductList";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const CategoryPreview = ({
  id,
  name,
  products,
  bgColor,
  customStyles,
  hasSubCategories,
}) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    if (id === "shop-by-product") {
      navigate("/products");
    }
  };

  return (
    <section
      className={styles.categoryPreview}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <h3 className={styles.categoryName}>{name}</h3>

      <ProductList
        products={products}
        customStyles={customStyles}
        hasSubCategories={hasSubCategories}
      />

      {id !== "help-info" && (
        <>
          <div className={styles.spacer}></div>
          <Button type="primary" onClick={handleViewAll}>
            View All
          </Button>
        </>
      )}
    </section>
  );
};

export default CategoryPreview;
