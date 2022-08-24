import React from "react";
import styles from "../style.module.css";

export const ButtonsAction = () => {
  return (
    <div className={styles.buttons}>
      <button type="button" className="btn btn-primary">
        Comprar ahora
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Agregar al carrito
      </button>
    </div>
  );
};
