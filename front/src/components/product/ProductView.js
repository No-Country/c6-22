import { useLocation, useParams } from "react-router-dom";
import { Carousel } from "./carousel/Carousel";

import { ButtonsAction } from "./buttons/ButtonsAction";

import visa from "../../assets/visa.png";
import mastrecard from "../../assets/mastercard.png";

import { useFetch } from "../../hooks/useFetch";
import { ProductStockShipping } from "./product-stock-shipping/ProductStockShipping";

import style from "./style.module.css";
import { formatPrice } from "../../helpers/formatPrice";
import { Title } from "../title/Title";
import { DetailsSkeleton } from "../skeletonComponents/DetailsSekeleton";
import { Products } from "../products/products";
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
  const { state } = useLocation();

  /*   const { error, loading, results } = useFetch(`catalog/${productId}`);

  const { name, details, img, price } = !loading ? results : {}; */

  const product = new Products().getDetails(state, productId);
  console.log(product);
  const { name, details, img, price } = product;

  return (
    <>
      <Title>Detalle</Title>
      <div className={container}>
        <>
          <div className={content}>
            <div className={box1}>
              <img
                id="selected"
                className={img_principal}
                src={img}
                alt="product"
              />
              {/* <div id="slider" className={grid_images}>
                <Carousel images={[img, img2, img3, img, img2, img3]} />
              </div> */}
            </div>
            <div className={box2}>
              <h1>{name}</h1>
              <div>
                <p className={price_color}>{formatPrice(price)}</p>
              </div>
              <div className={payments}>
                <img src={mastrecard} alt="mastercard" />
                <img src={visa} alt="visa" />
              </div>
              <ProductStockShipping />
              <ButtonsAction results={product} />
            </div>
          </div>
          <div className={details_content}>
            <p>{details}</p>
          </div>
        </>{" "}
        {/* : (
          <DetailsSkeleton />
        )} */}
      </div>
    </>
  );
};
