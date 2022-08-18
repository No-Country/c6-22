import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Cards from "../cards/Cards";
import data from "../json/data.json";

import styles from "../cards/Cards.module.css";

const { cardProducts } = styles;
export const ProductsView = () => {
  const categorieList = ["smartphones", "laptops", "tablets", "pc"];
  const { categorieId } = useParams();
  const verification = categorieList.includes(categorieId);
  const navigate = useNavigate();

  useEffect(() => {
    !verification && navigate("/");
  }, []);

  return (
    <>
      <div className={styles.cardsProducts}>
        {/*  <h1>productsview</h1> */}
        {data.map((products) => {
          return (
            <Cards
              key={products.id}
              id={products.id}
              title={products.title}
              description={products.description}
              img={products.url}
            />
          );
        })}
      </div>
      {/* <Link to={`${pathname}/${el.id}`}>Detalles</Link> */}
    </>
  );
};
