import React from "react";
import { useLocation } from "react-router-dom";
import style from "./style.module.css";

const { container, title } = style;

export const Title = ({ children }) => {
  return (
    <div className={container}>
      <h1 className={title}>{children}</h1>
    </div>
  );
};
