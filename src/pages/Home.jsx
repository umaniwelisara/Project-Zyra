import React from "react";

import styles from "./Home.module.css";
import SettingsBar from "../components/SettingsBar";
import NavigationBar from "../components/NavigationBar";
import Categories from "../components/Categories";
import CategoryPreview from "../components/CategoryPreview";
import productsData from "../products.json";
import AppPromotion from "../components/AppPromotion";
import PaymentMethods from "../components/PaymentMethods";
import Footer from "../components/Footer";
import AnnouncementBanner from "../components/AnnouncementBanner";

const Home = () => {
  return (
    <main className={styles.home}>
      <SettingsBar />
      <NavigationBar />
      <AnnouncementBanner />
      <Categories />
      {productsData.categories.map((category, index) => (
        <CategoryPreview
          key={category.id}
          {...category}
          bgColor={
            index % 2 === 0
              ? "var(--color-bg--primary)"
              : "var(--color-bg--secondary)"
          }
        />
      ))}
      <AppPromotion />
      <PaymentMethods />
      <Footer />
    </main>
  );
};

export default Home;
