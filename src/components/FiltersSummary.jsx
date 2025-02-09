import React from "react";

import styles from "./FiltersSummary.module.css";
import Button from "./Button";

const FiltersSummary = ({ filters, onFilterRemove, onClearAll }) => {
  const formatFilterLabel = (key, value) => {
    if (key === "price") return `Range €${value[0]} - €${value[1]}`;
    if (key === "type")
      return value
        .map((v) => v.charAt(0).toUpperCase() + v.slice(1) + "s")
        .join(", ");
    if (key === "color")
      return value
        .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
        .join(", ");
    if (key === "size") return `Size ${value.join(", ")}`;
    return value.join(", ");
  };

  const appliedFilters = Object.entries(filters)
    .filter(([, value]) => value.length > 0)
    .map(([key, value]) => ({ key, label: formatFilterLabel(key, value) }));

  return (
    <section className={styles.filtersbar}>
      <section className={styles.main}>
        <div className={styles.title}>Filters</div>
      </section>
      <section className={styles.appliedFilters}>
        <div className={styles.filtersList}>
          {appliedFilters.map(({ key, label }) => (
            <div
              key={key}
              style={{
                display: "flex",
                alignItems: "center",
                background: "#ccc",
                borderRadius: "16px",
                padding: "6px 10px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              {label}
              <span
                onClick={() => onFilterRemove(key)}
                style={{
                  marginLeft: "6px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                ✕
              </span>
            </div>
          ))}
        </div>
        {appliedFilters.length > 0 && (
          <Button type="secondarySmall" onClick={onClearAll}>
            Clear All
          </Button>
        )}
      </section>
    </section>
  );
};

export default FiltersSummary;
