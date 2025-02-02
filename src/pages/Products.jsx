import React from "react";

import styles from "./Products.module.css";
import SettingsBar from "../components/SettingsBar";
import NavigationBar from "../components/NavigationBar";
import PaymentMethods from "../components/PaymentMethods";
import Footer from "../components/Footer";
import FiltersSummary from "../components/FiltersSummary";
import AnnouncementBanner from "../components/AnnouncementBanner";
import FiltersBar from "../components/FiltersBar";
import ProductsGrid from "../components/ProductsGrid";

const Products = () => {
  return (
    <main className={styles.products}>
      <SettingsBar />
      <NavigationBar />
      <AnnouncementBanner />

      <FiltersSummary />
      <section className={styles.content}>
        <FiltersBar />
        <ProductsGrid />
      </section>

      <PaymentMethods />
      <Footer />
    </main>
  );
};

export default Products;
