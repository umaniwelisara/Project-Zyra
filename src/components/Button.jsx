import { useContext } from "react";
import styles from "./Button.module.css";
import AgeGroupContext from "../context/AgeGroupContext";
import { AG1 } from "../constants";

const Button = ({ children, onClick, type, customStyles = null }) => {
  const { ageGroup } = useContext(AgeGroupContext);

  const extraClass = type + (ageGroup === AG1 ? "Opt1" : "Opt2");

  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[type]} ${styles[extraClass]}`}
      style={customStyles}
    >
      {children}
    </button>
  );
};

export default Button;
