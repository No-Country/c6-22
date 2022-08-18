import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "./carousel/Carousel";
import { ProductStockShipping } from "./product-stock-shipping/ProductStockShipping";
import { ButtonsAction } from "./buttons/ButtonsAction";
import { fething } from "./helpers";

import visa from "../../assets/visa.png";
import mastrecard from "../../assets/mastercard.png";

import style from "./style.module.css";

const {
  container,
  content,
  box1,
  box2,
  grid_images,
  img_principal,
  details_content,
  payments,
  price_color,
} = style;

//El producto puede o NO venir de una peticion, preferentemente se busca desde la peticion hecha para ver los productos de x categoria (guardados en un state)

export const ProductView = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState(true);

  const { name, details, img, img2, img3, price } = !loading
    ? products[productId]
    : {};

  const handleLoading = (status) => setLoading(status);
  const handleProducts = (data) => setProducts(data);

  useEffect(() => {
    fething(handleLoading, handleProducts);
  }, [productId]);

  return (
    <div className={container}>
      {!loading ? (
        <>
          <div className={content}>
            <div className={box1}>
              <img
                id="selected"
                className={img_principal}
                src={img}
                alt="product"
              />
              <div id="slider" className={grid_images}>
                <Carousel images={[img, img2, img3, img, img2, img3]} />
              </div>
            </div>
            <div className={box2}>
              <h1>{name}</h1>
              <div>
                <p className={price_color}>${price}</p>
              </div>
              <div className={payments}>
                <img src={mastrecard} alt="mastercard" />
                <img src={visa} alt="visa" />
              </div>

              <ProductStockShipping />
              <ButtonsAction />
            </div>
          </div>
          <div className={details_content}>
            <p>{details}</p>
          </div>
        </>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};
