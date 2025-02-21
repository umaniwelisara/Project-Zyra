import React from "react";
import styles from "./ProductsGrid.module.css";
import Product from "./Product";
import Pagination from "./Pagination";
import { AG1, AG2 } from "../constants";
import { ChevronDown } from "lucide-react";

const ProductsGrid = ({ products, ageGroup, filters }) => {
  const isAnyFilterApplied =
    filters?.type?.length !== 0 ||
    filters?.price?.length !== 0 ||
    filters?.color?.length !== 0;

  return (
    <div>
      {ageGroup === AG1 && (
        <div className={styles.sort}>
          <Sort title="Most Relevant" />
        </div>
      )}

      <div
        className={`${styles.grid} ${
          ageGroup === AG2 ? styles.threeColGrid : ""
        }`}
      >
        {products.map((product, index) => (
          <Product
            key={index}
            product={product}
            ageGroup={ageGroup}
            isProductsPage={true}
          />
        ))}
      </div>
      {!isAnyFilterApplied && <Pagination />}
    </div>
  );
};

export default ProductsGrid;

export const Sort = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "2px solid #14b8a6",
        borderRadius: "6px",
        padding: "7px 12px",
        fontSize: "16px",
        width: "170px",
        height: "30px",
        cursor: "pointer",
        boxSizing: "border-box",
        margin: "4px 0",
      }}
    >
      <span>{title}</span>
      <ChevronDown size={24} />
    </div>
  );
};
