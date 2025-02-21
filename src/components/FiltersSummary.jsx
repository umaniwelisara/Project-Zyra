import React from "react";

import styles from "./FiltersSummary.module.css";
import Button from "./Button";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import PriceRangeSlider from "./PriceRangeSlider";

const FiltersSummary = ({
  filters,
  onFilterRemove,
  onClearAll,
  isYouthful,
}) => {
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

  const handleOnChange = () => {};

  return (
    <section
      className={`${styles.filtersbar} ${
        !isYouthful ? styles.filtersbarOpt2 : ""
      }`}
    >
      {isYouthful && (
        <section className={styles.main}>
          <div className={styles.title}>Filters</div>
        </section>
      )}

      {!isYouthful && (
        <div className={styles.filtersGridContainer}>
          <section className={styles.filtersGrid}>
            <Dropdown title="Sort" />
            <Dropdown title="Color" />
            <Dropdown title="Discount" />
            <Dropdown title="Size" />
            <span>Price Range</span>
            <PriceRangeSlider
              isProductsPage={true}
              min={10}
              max={80}
              selectedRange={filters.price}
              onChange={handleOnChange}
            />
            <Dropdown title="Area" />
            <Dropdown title="Showroom" />
          </section>
          <div className={styles.filterActionsContainer}>
            <Button type="primary">Apply Filters</Button>
            <div className={styles.hideFilters}>
              <span>Hide</span>
              <ChevronUp />
            </div>
          </div>
        </div>
      )}

      {isYouthful && (
        <section className={styles.appliedFilters}>
          <div className={styles.filtersList}>
            {appliedFilters.map(({ key, label }) => (
              <div key={key} className={styles.filterChip}>
                {label}
                <X
                  size={22}
                  className={styles.filterChipClose}
                  onClick={() => onFilterRemove(key)}
                />
              </div>
            ))}
          </div>
          {appliedFilters.length > 0 && (
            <Button type="secondarySmall" onClick={onClearAll}>
              Clear All
            </Button>
          )}
        </section>
      )}
    </section>
  );
};

export default FiltersSummary;

export const Dropdown = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "2px solid #14b8a6",
        borderRadius: "3px",
        padding: "7px 12px",
        fontSize: "16px",
        width: "170px",
        height: "42px",
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
