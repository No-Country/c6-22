import React from "react";
import { useParams } from "react-router-dom";

export const ProductView = () => {
  const { productId } = useParams();

  //Obtener ID del producto que coincida con el "productId"
  //Si se encuentra, dar los detalles, sino reedirigir a la categoria anterior "replace"

  return <div> id: {productId}</div>;
};
