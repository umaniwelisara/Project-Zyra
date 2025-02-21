import React, { useContext, useEffect, useState } from "react";

import styles from "./Home.module.css";
import Categories from "../components/Categories";
import CategoryPreview from "../components/CategoryPreview";
import productsData from "../products.json";
import AppPromotion from "../components/AppPromotion";
import PaymentMethods from "../components/PaymentMethods";
import Footer from "../components/Footer";
import AgeGroupPopup from "../components/AgeGroupPopup";

import AgeGroupContext from "../context/AgeGroupContext";
import OutfitGallery from "../components/OutfitGallery";
import { AG1 } from "../constants";

const Home = () => {
  const { ageGroup } = useContext(AgeGroupContext);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenAgePopup");
    if (!hasSeenPopup) {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem("hasSeenAgePopup", "true");
  };

  return (
    <main className={styles.home}>
      {showPopup && <AgeGroupPopup onClose={handleClosePopup} />}
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
      {ageGroup == AG1 && <OutfitGallery />}
      <AppPromotion />
      <PaymentMethods />
      <Footer />
    </main>
  );
};

export default Home;
