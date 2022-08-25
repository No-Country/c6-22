import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [inputValue, setInputValue] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name == "credit_number") {
      return setInputValue({
        ...inputValue,
        [name]: value
          // Eliminamos espacios en blanco
          .replace(/\s/g, "")
          // Eliminar las letras
          .replace(/\D/g, "")
          // Ponemos espacio cada cuatro numeros
          .replace(/([0-9]{4})/g, "$1 ")
          // Elimina el ultimo espaciado
          .trim(),
      });
    }

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const inputReset = () => initialState;

  return { inputValue, handleChange, inputReset };
};
