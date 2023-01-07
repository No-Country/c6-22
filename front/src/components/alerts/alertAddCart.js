import swal from "sweetalert";

export const alertAddCart = () => {
  swal({
    title: "Agregado",
    icon: "success",
    buttons: false,
    timer: 1500,
  });
};
