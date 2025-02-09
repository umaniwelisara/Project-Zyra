import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import styles from "./accordion.module.css";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.accordionItem}>
      {/* Header Section */}
      <div
        className={styles.accordionHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? (
          <Minus className={styles.icon} />
        ) : (
          <Plus className={styles.icon} />
        )}
      </div>

      {/* Animated Content Section */}
      <div
        className={`${styles.accordionContent} ${isOpen ? styles.show : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
