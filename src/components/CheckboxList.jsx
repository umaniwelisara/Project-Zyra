import { useState } from "react";
import styles from "./CheckboxList.module.css";

const CheckboxList = ({ uniqueTypes, onChange }) => {
  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = (value) => {
    const newSelection = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];

    setSelected(newSelection);
    onChange(newSelection);
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
