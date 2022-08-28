import axios from "axios";

export const baseURL = axios.create({
  //http://localhost:8080/
  //home  => /categories
  //products => /laptops
  //producto => catalog/id
  baseURL: "https://62f6e898612c13062b564767.mockapi.io",
});
