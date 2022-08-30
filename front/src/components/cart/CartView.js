import React from "react";
import { Checkout } from "./checkout/Checkout";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../features/cartSlice";
import { formatPrice } from "../../helpers/formatPrice";

const { container, li, ul, box_1, img_name, price_button, priceText, title } =
  styles;

export const CartView = () => {
  const cartStorage = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartStorage.reduce((acc, el) => acc + el.price, 0);

  const handleClick = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <h1 className={title}>Carrito</h1>

      <div className={container}>
        {cartStorage.length > 0 ? (
          <>
            {" "}
            <div className={box_1}>
              <ul className={`${ul} list-group`}>
                {cartStorage.map(({ title, price, img }, i) => {
                  return (
                    <li className={`${li} list-group-item`} key={i}>
                      <div className={img_name}>
                        <img src={img} alt={title} />
                        <h3>{title}</h3>
                      </div>
                      <div className={price_button}>
                        <span>{formatPrice(price)}</span>
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

              <p className={priceText}>
                Subtotal:
                <span>{formatPrice(totalPrice)}</span>
              </p>
            </div>
            <Checkout cartStorage={cartStorage} />
          </>
        ) : (
          <h4>Sin productos guardados</h4>
        )}
      </div>
    </>
  );
};
