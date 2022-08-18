import React from "react";
import styles from "./styles.module.css";

import { ReactComponent as Check } from "../../../assets/check.svg";
import { ReactComponent as Shield } from "../../../assets/shield.svg";
import { ReactComponent as Truck } from "../../../assets/truck.svg";

const { product_stock_shipping, svgBox, txt } = styles;

/* const check = require("../../assets/check.svg").default; */

export const ProductStockShipping = () => {
  return (
    <div className={product_stock_shipping}>
      <div className={svgBox}>
        <Shield />
        <p className={txt}>Garantía.</p>
      </div>
      <div className={svgBox}>
        <Truck />
        <p className={txt}>Envíos a todo el país.</p>
      </div>
      <div className={svgBox}>
        <Check />
        <p className={txt}>Stock disponible.</p>
      </div>
    </div>
  );
};
