import React from "react";
import axios from "axios";
import styles from "../register/Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowBack } from "../../assets/arrow-left.svg";
import swal from "sweetalert";
import { Title } from "../title/Title";

const {
  email_icon,
  password_icon,
  form_container,
  link_log,
  btn_toLog,
  btn_sub,
} = styles;

function RegisterUser() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexpEmail =
      /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
    if (email === "" || password === "") {
      swal("Los campos no pueden estar vacios", "", "info");
      return;
    }
    if (email !== "" && !regexpEmail.test(email)) {
      swal("Ingresa un correo válido", "", "error");
      return;
    }
    if (password.trim().length > 8) {
      swal("Máximo de 8 caracteres", "", "error");
      return;
    }
    if (email === "email@email.com" && password === "password")
      axios
        .post("https://62ffd8e89350a1e548e754cd.mockapi.io/register/users", {
          email,
          password,
        })
        .then((res) => {
          {
            swal("Usuario registrado correctamente", "", "success");
          }
          navigate("/");
        });
  };
  return (
    <>
      <div className={form_container}>
        <Title>Registro</Title>
        <form onSubmit={handleRegister}>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className={btn_toLog}
          >
            <ArrowBack />
          </button>
          <h2>TecnoStore</h2>
          <input
            className={email_icon}
            type="email"
            name="email"
            placeholder="Correo"
            autoFocus
          />

          <input
            className={password_icon}
            type="password"
            name="password"
            placeholder="Contraseña"
            minLength={6}
          />

          <button type="submit" className={btn_sub}>
            Registrarse
          </button>

          <div className={link_log}>
            <small>¿Ya tienes cuenta? </small>
            <Link to="/login">Log in</Link>
          </div>
          <div className="">
            <p></p>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterUser;
