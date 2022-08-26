import React from "react";
import { Checkout } from "./checkout/Checkout";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../features/cartSlice";

const { container, li, ul, box_1, img_name, price_button, priceText, title } =
  styles;

export const CartView = () => {
  const cartStorage = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartStorage.reduce((acc, el) => acc + el.price, 0);

  const formatPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARG",
  });

  const handleClick = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <h1 className={title}>Carrito</h1>

      <div className={container}>
        <div className={box_1}>
          {cartStorage.length > 0 ? (
            <ul className={`${ul} list-group`}>
              {cartStorage.map(({ title, price, product_id, img }, i) => {
                return (
                  <li className={`${li} list-group-item`} key={i}>
                    <div className={img_name}>
                      <img src={img} alt={title} />
                      <h3>{title}</h3>
                    </div>
                    <div className={price_button}>
                      <span>{formatPrice.format(price)}</span>
                      <button
                        onClick={() => handleClick(i)}
                        className="btn btn-outline-danger"
                      >
                        x
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <h4>No hay productos agregados a favoritos</h4>
          )}
          {cartStorage.length > 0 && (
            <p className={priceText}>
              Subtotal:
              <span>{formatPrice.format(totalPrice)}</span>
            </p>
          )}
        </div>
        {cartStorage.length > 0 && <Checkout />}
      </div>
    </>
  );
};
