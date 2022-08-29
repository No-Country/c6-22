import { useRef, useState } from "react";
import swal from "sweetalert";

import { useForm } from "../../../hooks/useForm";
import { SelectElement } from "./SelectElement";
import shippingIMG from "../../../assets/shipping.png";
import { checkValues } from "./validate";

import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { clearProducts } from "../../../features/cartSlice";

const {
  checkout,
  checkout__form_error,
  visible,
  input_code,
  shipping_contain,
} = style;

export const Checkout = () => {
  const dispatch = useDispatch();
  const [shipping, setShipping] = useState(false);
  const ref = useRef();
  const refButton = useRef();
  const checkout_btn_ref = useRef();

  const [error, setError] = useState({});
  const { handleChange, inputReset, inputValue } = useForm({
    name: "",
    credit_number: "2222420000001113",
    expiration_years: "",
    expiration_month: "",
    security_code: "",
  });

  const { name, credit_number, security_code } = inputValue;

  function handleSetError(err) {
    setError(err);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (checkValues(inputValue, handleSetError)) {
      //conectar al server/redux
      checkout_btn_ref.current.disabled = true;

      setTimeout(() => {
        swal({
          text: "Compra realizada con éxito",
          icon: "success",
          title: "Éxito",
        });
        checkout_btn_ref.current.disabled = false;
        setShipping(true);
        dispatch(clearProducts());
      }, 2000);
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
      {!shipping ? (
        <>
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
              value={credit_number // Eliminamos espacios en blanco
                .replace(/\s/g, "")
                // Eliminar las letras
                .replace(/\D/g, "")
                // Ponemos espacio cada cuatro numeros
                .replace(/([0-9]{4})/g, "$1 ")
                // Elimina el ultimo espaciado
                .trim()}
            />
            <div className={checkout__form_error}>{error.credit_number}</div>
          </div>

          <div className=" d-flex justify-content-center pointer mb-3 flex-wrap align-items-end">
            <div className="me-1">
              <label htmlFor="expiration_month">Mes</label>
              <SelectElement handleChange={handleChange} />
              <div className={checkout__form_error}>
                {error.expiration_month}
              </div>
            </div>
            <div className="me-1">
              <label htmlFor="expiration_years">Año</label>
              <SelectElement handleChange={handleChange} yearsInit={22} />
              <div className={checkout__form_error}>
                {error.expiration_years}
              </div>
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

          <button
            ref={checkout_btn_ref}
            type="submit"
            className="btn btn-primary"
          >
            Finalizar compra
          </button>
        </>
      ) : (
        <div className={shipping_contain}>
          <h3>Envío en camino! </h3>

          <img src={shippingIMG} alt="shipping-img" />
        </div>
      )}
    </form>
  );
};
