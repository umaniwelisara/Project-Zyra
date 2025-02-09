import React from "react";
import styles from "./FiltersBar.module.css";
import Accordion from "./Accordion";
import CheckboxList from "./CheckboxList";
import PriceRangeSlider from "./PriceRangeSlider";
import ColorCategoryFilter from "./ColorCategoryFilter";
import SizeSelector from "./SizeSelector";
import { ChevronDown } from "lucide-react";

const FiltersBar = ({ products, filters, onFilterChange }) => {
  const uniqueProductTypes = Array.from(
    new Set(products.map((p) => p.type))
  ).map((type) => ({
    value: type,
    label:
      type === "dress"
        ? "Dresses"
        : type.charAt(0).toUpperCase() + type.slice(1) + "s",
  }));

  return (
    <div className={styles.filters}>
      <Accordion
        items={[
          {
            title: "Product",
            content: (
              <CheckboxList
                uniqueTypes={uniqueProductTypes}
                selectedValues={filters.type}
                onChange={(selected) => onFilterChange({ type: selected })}
              />
            ),
          },
          {
            title: "Price",
            content: (
              <PriceRangeSlider
                min={10}
                max={80}
                selectedRange={filters.price}
                onChange={(range) => onFilterChange({ price: range })}
              />
            ),
          },
          {
            title: "Colour",
            content: (
              <ColorCategoryFilter
                products={products}
                selectedColors={filters.color}
                onChange={(selected) => onFilterChange({ color: selected })}
              />
            ),
          },
          {
            title: "Size Range",
            content: (
              <CheckboxList
                uniqueTypes={[
                  { value: "plus_size", label: "Plus Size" },
                  { value: "petite", label: "Petite" },
                  { value: "tall", label: "Tall" },
                  { value: "maternity", label: "Maternity" },
                ]}
                onChange={() => {}}
              />
            ),
          },
          {
            title: "Sizes",
            content: <SizeSelector />,
          },
          {
            title: "Occasion",
            content: (
              <CheckboxList
                uniqueTypes={[
                  { value: "everyday_wear", label: "Everyday Wear" },
                  { value: "party_wear", label: "Party Wear" },
                  { value: "wedding", label: "Wedding" },
                  { value: "winter_wear", label: "Winter Wear" },
                  { value: "office_wear", label: "Office Wear" },
                  { value: "sports", label: "Sports" },
                ]}
                onChange={() => {}}
              />
            ),
          },
          {
            title: "Location",
            content: (
              <>
                <h4 style={{ fontSize: "14px", fontWeight: 400 }}>Area</h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "2px solid #14b8a6",
                    borderRadius: "6px",
                    padding: "7px 12px",
                    fontSize: "14px",
                    width: "190px",
                    height: "30px",
                    cursor: "default",
                    boxSizing: "border-box",
                    margin: "4px 0",
                  }}
                >
                  <span>Tampere</span>
                  <ChevronDown size={18} />
                </div>
                <h4 style={{ fontSize: "14px", fontWeight: 400 }}>Showroom</h4>
                <CheckboxList
                  uniqueTypes={[
                    {
                      value: "hameenkatu_10",
                      label: "Hämeenkatu 10, 33100 Tampere",
                    },
                    {
                      value: "aleksanterinkatu_15",
                      label: "Aleksanterinkatu 15, 33100 Tampere",
                    },
                    {
                      value: "itsenaisyydenkatu_22",
                      label: "Itsenäisyydenkatu 22, 33500 Tampere",
                    },
                    {
                      value: "satakunnankatu_30",
                      label: "Satakunnankatu 30, 33210 Tampere",
                    },
                  ]}
                  onChange={() => {}}
                />
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default FiltersBar;
