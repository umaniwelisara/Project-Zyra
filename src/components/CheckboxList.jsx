import { useEffect, useState } from "react";
import styles from "./CheckboxList.module.css";

const CheckboxList = ({ uniqueTypes, selectedValues = [], onChange }) => {
  const [selected, setSelected] = useState(selectedValues);

  // Only update state when selectedValues actually change
  useEffect(() => {
    if (JSON.stringify(selected) !== JSON.stringify(selectedValues)) {
      setSelected(selectedValues);
    }
  }, [selectedValues, selected]);

  const handleCheckboxChange = (value) => {
    const updatedSelection = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];

    setSelected(updatedSelection);
    onChange(updatedSelection);
  };

  return (
    <div className={styles.checkBoxList}>
      {uniqueTypes.map((option) => (
        <label key={option.value} className={styles.checkBoxOpt}>
          <input
            type="checkbox"
            className={styles.checkBox}
            value={option.value}
            checked={selected.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default CheckboxList;
