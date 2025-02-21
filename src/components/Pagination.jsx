import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div style={styles.paginationContainer}>
      <button style={styles.arrowLeft}>
        <ChevronLeft />
      </button>
      <button style={{ ...styles.page, ...styles.active }}>1</button>
      <button style={styles.page}>2</button>
      <button style={styles.page}>3</button>
      <button style={styles.page}>4</button>
      <button style={styles.arrowRight}>
        <ChevronRight />
      </button>
    </div>
  );
};

const styles = {
  paginationContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f8fc",
    padding: "0",
    borderRadius: "24px",
    gap: "0",
    marginBottom: "12px",
    filter: "drop-shadow(0px 4px 4px rgba(97, 97, 97, 0.25))",
    width: "fit-content",
    margin: "20px auto",
  },
  page: {
    border: "1px solid rgba(20, 184, 166, 0.20)",
    borderRadius: "0",
    padding: "6px 18px",
    backgroundColor: "white",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#000",
    cursor: "pointer",
    height: "36px",
  },
  active: {
    backgroundColor: "#0284C7",
    color: "white",
    border: "none",
  },

  arrowLeft: {
    border: "none",
    backgroundColor: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "6px 14px",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    height: "36px",
  },
  arrowRight: {
    border: "none",
    backgroundColor: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "5px 14px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    height: "36px",
  },
};

export default Pagination;
