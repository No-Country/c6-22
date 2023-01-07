import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../../features/cartSlice";
import { alertAddCart } from "../../alerts/alertAddCart";
import styles from "../style.module.css";

export const ButtonsAction = ({ results }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buyNow = () => {
    dispatch(addProduct(results));
    navigate("/cart");
  };

  const addToCart = () => {
    dispatch(addProduct(results));
    alertAddCart();
  };
  return (
    <div className={styles.buttons}>
      <button type="button" className="btn btn-primary" onClick={buyNow}>
        Comprar ahora
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={addToCart}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
