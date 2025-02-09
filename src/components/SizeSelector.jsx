import { useState } from "react";

const SizeSelector = () => {
  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleClick = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
      }}
    >
      {sizes.map((size) => (
        <label
          key={size}
          onClick={() => handleClick(size)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            border: `2px solid ${
              selectedSizes.includes(size) ? "#14b8a6" : "#020817"
            }`,
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
            transition: "0.2s",
          }}
        >
          {size}
        </label>
      ))}
    </div>
  );
};

export default SizeSelector;
