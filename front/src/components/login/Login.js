import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../features/authSlice";

import { useForm } from "../../hooks/useForm";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as LockIcon } from "../../assets/lock.svg";
import { ReactComponent as UserIcon } from "../../assets/user.svg";
import { ReactComponent as ArrowBack } from "../../assets/arrow-left.svg";

import { isValidate } from "./validate";
import styles from "./styles.module.css";

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
  const state = useSelector((state) => state.auth);

  const location = useLocation();

  /*    const pathname = location.state.pathname; */
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState(null);

  const { inputValue, handleChange, inputReset } = useForm({
    email: "ale@ale.com",
    password: "123aleA",
  });

  const { email, password } = inputValue;

  const handleSubmit = (e) => {
    e.preventDefault();

    const IsError = isValidate(email, password, setError);
    if (IsError) {
      dispatch(loginAction(email, password));
      //enviamos los datos para veificar el usuario en base de datos
    }
  };

  useEffect(() => {
    if (state) {
      const from = location?.state || "/";
      return navigate(from, { replace: true });
    }
  }, [state]);

  return (
    <div className={container}>
      <form onSubmit={handleSubmit} className={form}>
        <button type="button" onClick={() => navigate(-1)} className={btn_back}>
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
