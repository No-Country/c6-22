import axios from "axios";

export const baseURL = axios.create({
  //http://localhost:8080/
  //home  => /categories
  //products => /laptops
  //producto => catalog/id
  baseURL: "https://c6-22-ecommerce.herokuapp.com/",
});
