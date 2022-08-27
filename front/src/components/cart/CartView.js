import React from "react";
import { Checkout } from "./checkout/Checkout";
import styles from "./style.module.css";

const { container, li, ul, box_1, img_name, price_button, priceText, title } =
  styles;

const products = [
  {
    name: "Monitor",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/ar/lf27t350fhlczb/gallery/ar-t35f-388813-lf27t350fhlczb-456992076?$730_584_PNG$",
    price: 50000,
    product_id: 10,
  },
  {
    name: "Laptop",
    categorie: "laptops",
    image:
      "https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-intel-hero.png?context=bWFzdGVyfHJvb3R8MjczNzUyfGltYWdlL3BuZ3xoMGQvaDYxLzE0MTkwNTI5Njc1Mjk0LnBuZ3xmYTMyYzBlZmE5NTcyNzAyMTZhZmJlMmFmOTVjMmZmYTM4ZTdjNWFiZWM0YzE5YWQ2YzcxNmM3OTE2MThjZmE4",
    price: 65000,
    product_id: 30,
  },
  {
    name: "Intel i5",
    categorie: "pc",
    image:
      "https://www.venex.com.ar/products_images/1617202494_1019-producto-i5i5-system-linq-enumerabletakeiteratord-251system-char.png",
    price: 11000,
    product_id: 12,
  },
  {
    name: "Amd Ryzen",
    categorie: "pc",
    image:
      "https://mexx-img-2019.s3.amazonaws.com/procesador-cpu-ryzen_40368_1.jpeg",
    price: 86000,
    product_id: 14,
  },
];

export const CartView = () => {
  const totalPrice = products.reduce((acc, el) => acc + el.price, 0);

  const formatPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARG",
  });

  return (
    <>
      <h1 className={title}>Carrito</h1>

      <div className={container}>
        <div className={box_1}>
          <ul className={`${ul} list-group`}>
            {products.map(({ name, price, product_id, image }, i) => {
              return (
                <li className={`${li} list-group-item`} key={i}>
                  <div className={img_name}>
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                  </div>
                  <div className={price_button}>
                    <span>{formatPrice.format(price)}</span>
                    <button className="btn btn-outline-danger">x</button>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className={priceText}>
            Subtotal:
            <span>{formatPrice.format(totalPrice)}</span>
          </p>
        </div>
        <Checkout />
      </div>
    </>
  );
};
