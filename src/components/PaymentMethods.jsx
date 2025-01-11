import React from "react";
import styles from "./PaymentMethods.module.css";

const PaymentMethods = () => {
  const paymentMethods = [
    "visa.png",
    "master.png",
    "paypal.png",
    "amex.png",
    "google-pay.png",
    "apple-pay.png",
    "klarna.png",
  ];

  return (
    <section className={styles.paymentMethods}>
      <div className={styles.outerContainer}>
        <h2 className={styles.heading}>
          Flexible payment options just for you!
        </h2>
        <div className={styles.paymentMethodsContainer}>
          {paymentMethods.map((paymentMethod) => (
            <img
              key={paymentMethod}
              src={`/payment/${paymentMethod}`}
              alt={paymentMethod}
              className={styles.paymentMethod}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
