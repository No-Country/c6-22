import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [inputValue, setInputValue] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const inputReset = () => initialState;

  return { inputValue, handleChange, inputReset };
};
