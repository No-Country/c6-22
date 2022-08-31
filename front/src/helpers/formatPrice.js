const config = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
});

export const formatPrice = (value) => {
  return config.format(value);
};
