import React, { useEffect } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";

export const ProductsView = () => {
  const { categorieId } = useParams();

  const products = [
    `${categorieId} 1`,
    `${categorieId} 2`,
    `${categorieId} 3`,
    `${categorieId} 4`,
    `${categorieId} 5`,
    `${categorieId} 6`,
  ];

  class Product {
    constructor(name, text, id) {
      return (this.name = name), (this.text = text), (this.id = id);
    }
  }

  const generateProducts = products.map(
    (produc, id) => new Product(produc, `Detalle del Producto  ${id}`, id)
  );

  //Lo de arriba no tiene valor, solo es para crear unos productos. SE OBTIENEN DE LA BASE DE DATOS (menos el "useParams")

  let { pathname } = useLocation();
  const navigate = useNavigate();

  const categorieList = ["smartphones", "laptops", "tablets", "pc"]; //Categorias obtenidas de la base de datos
  const verification = categorieList.includes(categorieId);
  //verificacion si en la ruta se encuentra la categoria

  useEffect(() => {
    !verification && navigate("/");
    //Si en el path no viene una ruta válida se reedirige
  }, []);

  return (
    <div>
      Products de la categoria {categorieId}
      {generateProducts.map((el) => (
        <div key={el.id}>
          <h2>{el.name}</h2>
          <p>{el.text}</p>

          <Link to={`${pathname}/${el.id}`}>Detalles</Link>
        </div>
      ))}
    </div>
  );
};
