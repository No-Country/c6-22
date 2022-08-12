import validator from "validator";

export const isValidate = (email, password, setError) => {
  if (!validator.isEmail(email)) {
    setError("Ingrese un Email válido");
    return false;
  } else if (
    !validator.isStrongPassword(password, { minLength: 6, minSymbols: 0 })
  ) {
    setError("Password inválido");
    return false;
  } else {
    setError(null);
  }
  return true;
};
