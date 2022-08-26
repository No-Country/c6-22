import validator from "validator";

export const isValidate = (email, password, setError) => {
  if (!validator.isEmail(email)) {
    setError("Ingrese un Email válido");
    return false;
  }
  if (password.trim().length > 8) {
    setError("Máximo 8 caracteres");
    return false;
  }

  setError(null);

  return true;
};
