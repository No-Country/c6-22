import validator from "validator";

export const checkValues = (
  { name, credit_number, expiration_month, expiration_years, security_code },
  handleSetError
) => {
  if (name.trim().length < 3) {
    handleSetError({ name: "Nombre muy corto" });
    return false;
  }
  if (!validator.isCreditCard(credit_number)) {
    handleSetError({ credit_number: "Tarjeta inválida" });
    return false;
  }
  if (expiration_years.length < 1) {
    handleSetError({ expiration_years: "Seleccione el Año" });
    return false;
  }
  if (expiration_month.legnth < 1) {
    handleSetError({ expiration_month: "Seleccione el Mes" });
    return false;
  }
  if (!validator.isNumeric(security_code)) {
    handleSetError({ security_code: "Código inválido" });
    return false;
  }

  handleSetError({});
  return true;
};
