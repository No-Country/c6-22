import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

import { ReactComponent as LockIcon } from "../../assets/lock.svg";
import { ReactComponent as UserIcon } from "../../assets/user.svg";
import { ReactComponent as ArrowBack } from "../../assets/arrow-left.svg";

import { isValidate } from "./validate";

const {
  container,
  form,
  input_container,
  link_register,
  error_box,
  submit_btn,
  btn_back,
} = styles;

export const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { inputValue, handleChange, inputReset } = useForm({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleSubmit = (e) => {
    e.preventDefault();

    //Hablar al server
    const IsError = isValidate(email, password, setError);
    console.log(IsError);
  };

  return (
    <div className={container}>
      <form onSubmit={handleSubmit} className={form}>
        <button onClick={() => navigate(-1)} className={btn_back}>
          <ArrowBack />
        </button>
        <h2>TecnoStore</h2>
        <div className={input_container}>
          <UserIcon />
          <input
            type="email"
            onChange={handleChange}
            name="email"
            value={email}
            placeholder="Correo"
            autoFocus
          />
        </div>
        <div className={input_container}>
          <LockIcon />
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
            placeholder="Contraseña"
          />
        </div>

        <button className={submit_btn} type="submit">
          Ingresar
        </button>

        <div className={link_register}>
          <small>¿No estás registrado? </small>
          <Link to="/register">Registrate</Link>
        </div>

        <div className={error_box}>{error && <p>{error}</p>}</div>
      </form>
    </div>
  );
};
