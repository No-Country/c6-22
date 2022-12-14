import styles from "../home/Home.module.css";
import { Link } from "react-router-dom";
import { Title } from "../title/Title";
import { useFetch } from "../../hooks/useFetch";
import { HomeSkeleton } from "../skeletonComponents/HomeSkeleton";
import data from "../../json/data.json";

const { cardHome, card, cardImg, cardText, cardContainer, text } = styles;

const Home = () => {
  /*   const { results, loading, error } = useFetch("/categories"); */
  const products = data;

  return (
    <>
      <Title>Inicio</Title>
      <div className={cardHome}>
        {
          /* loading ? (
          <HomeSkeleton />
        ) : */ products.map(({ description, id, image, name }) => {
            const path = name.toLowerCase();
            return (
              <div key={id} className={cardContainer}>
                <div className={card}>
                  <div className={cardImg}>
                    <img src={image} alt={name} />
                  </div>
                  <div className={cardText}>
                    <div className={text}>
                      <h1>{name}</h1>
                      <p>{description}</p>
                      <Link to={`/${path}`}>Ver Productos</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
};

export default Home;
