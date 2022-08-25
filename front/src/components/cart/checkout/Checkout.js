import { useRef, useState } from "react";
import validator from "validator";
import { useForm } from "../../../hooks/useForm";
import { SelectElement } from "./SelectElement";

import style from "./style.module.css";
const { checkout, checkout__form_error, visible, input_code } = style;

export const Checkout = () => {
  const ref = useRef();
  const refButton = useRef();

  const [error, setError] = useState({});
  const { handleChange, inputReset, inputValue } = useForm({
    name: "",
    credit_number: "",
    expiration_years: "",
    expiration_month: "",
    security_code: "",
  });

  const {
    name,
    credit_number,
    expiration_years,
    expiration_month,
    security_code,
  } = inputValue;

  const checkValues = () => {
    if (name.trim().length < 3) {
      setError({ name: "Nombre muy corto" });
      return false;
    }
    if (!validator.isCreditCard(credit_number)) {
      setError({ credit_number: "Tarjeta inválida" });
      return false;
    }
    if (expiration_years.length < 1) {
      setError({ expiration_years: "Seleccione el Año" });
      return false;
    }
    if (expiration_month.legnth < 1) {
      setError({ expiration_month: "Seleccione el Mes" });
      return false;
    }
    if (!validator.isNumeric(security_code)) {
      setError({ security_code: "Código inválido" });
      return false;
    }

    setError({});
    return true;
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (checkValues()) {
      //conectar al server/redux
      console.log("validos");
    }
  }

  const handleClick = () => {
    const nameButton = refButton.current.textContent;

    if (nameButton == "Minimizar") {
      ref.current.classList.remove(visible);
      refButton.current.textContent = "Completar compra";
      return;
    }

    ref.current.classList.add(visible);
    refButton.current.textContent = "Minimizar";
  };

  return (
    <form className={checkout} ref={ref} onSubmit={handleSubmit}>
      <button
        type="button"
        className="btn btn-secondary mb-3"
        ref={refButton}
        onClick={handleClick}
      >
        Completar compra
      </button>
      <h3>PAGAR</h3>
      <div>
        <label htmlFor="name">Nombre del Titular</label>
        <input
          type="text"
          onChange={handleChange}
          id="name"
          name="name"
          value={name}
          className="form-control"
        />
        <div className={checkout__form_error}>{error.name}</div>
      </div>
      <div>
        <label htmlFor="credit_number">Número de tarjeta</label>
        <input
          type="text"
          onChange={handleChange}
          id="credit_number"
          className="form-control"
          name="credit_number"
          maxLength={19}
          value={credit_number}
        />
        <div className={checkout__form_error}>{error.credit_number}</div>
      </div>

      <div className=" d-flex justify-content-center pointer mb-3 flex-wrap align-items-end">
        <div className="me-1">
          <label htmlFor="expiration_month">Mes</label>
          <SelectElement handleChange={handleChange} />
          <div className={checkout__form_error}>{error.expiration_month}</div>
        </div>
        <div className="me-1">
          <label htmlFor="expiration_years">Año</label>
          <SelectElement handleChange={handleChange} yearsInit={22} />
          <div className={checkout__form_error}>{error.expiration_years}</div>
        </div>
        <div className="me-1">
          <label htmlFor="security_code">Cód. Seg.</label>
          <input
            type="text"
            onChange={handleChange}
            id="security_code"
            name="security_code"
            value={security_code}
            maxLength="3"
            className={`form-control ${input_code}`}
          />
          <div className={checkout__form_error}>{error.security_code}</div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Finalizar compra
      </button>
    </form>
  );
};
