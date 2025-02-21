import React, { useContext } from "react";
import styles from "./CategoryPreview.module.css";
import ProductList from "./ProductList";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import AgeGroupContext from "../context/AgeGroupContext";
import { AG1 } from "../constants";

const CategoryPreview = ({
  id,
  name,
  products,
  bgColor,
  customStyles,
  hasSubCategories,
}) => {
  const navigate = useNavigate();
  const { ageGroup } = useContext(AgeGroupContext);

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
      <h3
        className={
          ageGroup == AG1 ? styles.categoryNameOpt1 : styles.categoryNameOpt2
        }
      >
        {name}
      </h3>

      <ProductList
        ageGroup={ageGroup}
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
