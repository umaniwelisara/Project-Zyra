import React from "react";

import styles from "./FiltersSummary.module.css";
import Button from "./Button";

const FiltersSummary = () => {
  const applyFilter = () => {};

  return (
    <section className={styles.filtersbar}>
      <div className={styles.title}>Filters</div>
      <Button type="primarySmall" onClick={applyFilter}>
        Apply
      </Button>
    </section>
  );
};

export default FiltersSummary;
