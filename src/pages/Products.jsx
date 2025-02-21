import React, { useContext, useState } from "react";

import styles from "./Products.module.css";

import PaymentMethods from "../components/PaymentMethods";
import Footer from "../components/Footer";
import FiltersSummary from "../components/FiltersSummary";
import FiltersBar from "../components/FiltersBar";
import ProductsGrid from "../components/ProductsGrid";
import allProductsData from "../allproducts.json";
import AgeGroupContext from "../context/AgeGroupContext";
import { AG1 } from "../constants";

const Products = () => {
  const { ageGroup } = useContext(AgeGroupContext);
  const isYouthful = ageGroup === AG1;

  const [filters, setFilters] = useState({
    type: [],
    price: [],
    color: [],
  });

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const handleFilterRemove = (key) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: [],
    }));
  };

  const handleClearAll = () => {
    setFilters({
      type: [],
      price: [],
      color: [],
    });
  };

  const filteredProducts = allProductsData.products.filter((product) => {
    // Filter by Product Type
    const typeMatch =
      filters?.type?.length > 0 ? filters.type.includes(product.type) : true;

    // Filter by Price Range
    const priceMatch =
      filters?.price?.length === 2
        ? product.priceAmt >= filters.price[0] &&
          product.priceAmt <= filters.price[1]
        : true;

    // Filter by Color Category (at least one selected color must match)
    const colorMatch =
      filters?.color?.length > 0
        ? product.colorCategory.some((color) => filters.color.includes(color))
        : true;

    return typeMatch && priceMatch && colorMatch;
  });

  return (
    <main className={styles.products}>
      <FiltersSummary
        isYouthful={isYouthful}
        filters={filters}
        onFilterRemove={handleFilterRemove}
        onClearAll={handleClearAll}
      />

      <section
        className={styles.content}
        style={!isYouthful ? { justifyContent: "center" } : {}}
      >
        {isYouthful && (
          <FiltersBar
            products={allProductsData.products}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        )}

        {filteredProducts.length > 0 ? (
          <ProductsGrid
            products={filteredProducts}
            ageGroup={ageGroup}
            filters={filters}
          />
        ) : (
          <div className={styles.noProducts}>
            <p>No products found.</p>
            <p>Try adjusting your filters.</p>
          </div>
        )}
      </section>

      <PaymentMethods />
      <Footer />
    </main>
  );
};

export default Products;
