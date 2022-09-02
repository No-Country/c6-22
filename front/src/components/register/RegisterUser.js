import React from "react";
import { useDispatch } from "react-redux";
import styles from "../register/Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowBack } from "../../assets/arrow-left.svg";
import swal from "sweetalert";
import { Title } from "../title/Title";
import { baseURL } from "../../axios/axiosInstance";
import { login } from "../../features/authSlice";

const {
  email_icon,
  password_icon,
  form_container,
  link_log,
  btn_toLog,
  btn_sub,
} = styles;

function RegisterUser() {
  const dispatch = useDispatch();
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

    baseURL
      .post("/register", {
        email,
        password,
      })

      .then(({ data }) => {
        const { token, username: email } = data;
        dispatch(login({ email, token }));
        swal("Usuario registrado correctamente", "", "success");

        /*    navigate("/"); */
      })
      .catch((e) => {
        if (e.request.status === 400) {
          swal("Parece que el correo se encuentra en uso", "", "error");
        }
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
            <Link to="/login">Ingresá</Link>
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
