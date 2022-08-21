import { baseURL } from "../../axios/axiosInstance";

export const changueSelected = (img) => {
  const selected = document.getElementById("selected");
  selected.setAttribute("src", img.target.currentSrc);
};

export const resize = (changueView, width = window.innerWidth) => {
  if (width > 800) return changueView(3);

  if (width < 800 && width > 600) return changueView(2);

  if (width < 600) {
    document
      .querySelectorAll("#swiper img")
      .forEach((node) => node.classList.remove("active_img"));
    return changueView(1);
  }
};

export const fething = (handleLoading, handleProducts, index = "") => {
  baseURL("/Product")
    .then(({ data }) => {
      handleProducts(data);
      handleLoading(false);
    })
    .catch((e) => {
      console.log(e);
    });
};
