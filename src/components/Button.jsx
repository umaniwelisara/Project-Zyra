import styles from "./Button.module.css";

const Button = ({ children, onClick, type, customStyles = null }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[type]}`}
      style={customStyles}
    >
      {children}
    </button>
  );
};

export default Button;
