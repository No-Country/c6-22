import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Cards from "../cards/Cards";

import styles from "../cards/Cards.module.css";
import { Title } from "../title/Title";
import { useFetch } from "../../hooks/useFetch";
import { ProductsSkeleton } from "../skeletonComponents/ProductsSkeleton";
import { Products } from "./products";

export const ProductsView = () => {
  const categorieList = ["smartphones", "laptops", "tablets", "pc"];
  const { categorieId } = useParams();
  const verification = categorieList.includes(categorieId);
  const navigate = useNavigate();

  /*   const { error, loading, results } = useFetch(`categories/${categorieId}`); */

  useEffect(() => {
    !verification && navigate("/");
  }, []);

  const products = new Products().getProducts(categorieId);

  return (
    <>
      <Title>{categorieId}</Title>
      <div className={styles.containerWidth}>
        <div className={styles.cardsProducts}>
          {
            /* loading ? (
            <ProductsSkeleton />
          ) : */ products.map((products) => {
              return <Cards key={products.id} {...products} />;
            })
          }
        </div>
      </div>
    </>
  );
};
