import React from "react";

import styles from "./styles.module.css";
const { form, container } = styles;

export const Register = () => {
  return (
    <div className={container}>
      <h2>Register</h2>

      <form className={form}>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <input type="password2" placeholder="Repetir contraseña" />

        <button type="submit" className="btn btn-outline-info">
          Registrarse
        </button>
      </form>
    </div>
  );
};
