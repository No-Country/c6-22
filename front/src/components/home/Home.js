import React from "react";
import styles from "../home/Home.module.css";
import data from "../json/data.json";
import { Link } from "react-router-dom";

const { cardHome, card, cardImg, cardText, cardContainer, text, button } =
  styles;

const Home = () => {
  return (
    <>
      <div className={cardHome}>
        {data.map((product) => {
          const path = product.title.toLowerCase();
          return (
            <div key={product.id} className={cardContainer}>
              <div className={card}>
                <div className={cardImg}>
                  <img src={product.url} alt="..." />
                </div>
                <div className={cardText}>
                  <div className={text}>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <Link to={`/${path}`}>
                      {" "}
                      <button>SEE MORE</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
