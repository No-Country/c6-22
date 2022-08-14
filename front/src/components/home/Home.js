import React from "react";
import styles from "../home/Home.module.css";
import data from "../json/data.json"
import { Link } from "react-router-dom";

const {cardHome, card, cardImg, cardText} = styles

const Home = () => {
  return (
    <>
    <div className={cardHome}>
    {
       data.map((product) => {
        return (
          <div key={product.id}>
              <div className={card}>
                <div className={cardImg}>
                  <img src={product.url} alt="..."/>
                </div>
                <div className={cardText}>
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <Link to={`/${product.title}`}>SEE MORE</Link>
                </div>
             </div>
          </div>
        )
       }) 
    }
  </div>
 </>
  )
}

export default Home

