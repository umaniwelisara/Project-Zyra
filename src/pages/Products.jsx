import React, { useState } from "react";

import styles from "./Products.module.css";
import SettingsBar from "../components/SettingsBar";
import NavigationBar from "../components/NavigationBar";
import PaymentMethods from "../components/PaymentMethods";
import Footer from "../components/Footer";
import FiltersSummary from "../components/FiltersSummary";
import AnnouncementBanner from "../components/AnnouncementBanner";
import FiltersBar from "../components/FiltersBar";
import ProductsGrid from "../components/ProductsGrid";
import allProductsData from "../allproducts.json";

const Products = () => {
  const [filters, setFilters] = useState({ type: [] });

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
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

    return typeMatch && priceMatch;
  });

  return (
    <main className={styles.products}>
      <SettingsBar />
      <NavigationBar />
      <AnnouncementBanner />

      <FiltersSummary />
      <section className={styles.content}>
        <FiltersBar
          products={allProductsData.products}
          onFilterChange={handleFilterChange}
        />

        {filteredProducts.length > 0 ? (
          <ProductsGrid products={filteredProducts} />
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
