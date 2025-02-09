import React from "react";

import styles from "./FiltersSummary.module.css";
import Button from "./Button";

const FiltersSummary = () => {
  const applyFilter = () => {};

  console.log(styles.applyBtn);

  return (
    <section className={styles.filtersbar}>
      <section className={styles.main}>
        <div className={styles.title}>Filters</div>
        <Button
          type="primarySmall"
          onClick={applyFilter}
          customStyles={{ marginRight: "20px" }}
        >
          Apply
        </Button>
      </section>
      <section className={styles.appliedFilters}>
        <div>Applied filters</div>
        <Button type="secondarySmall" onClick={applyFilter}>
          Clear All
        </Button>
      </section>
    </section>
  );
};

export default FiltersSummary;
