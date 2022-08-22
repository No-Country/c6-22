import { baseURL } from "../axios/axiosInstance";

export const getService = (url) => {
  return baseURL
    .get(url)
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((e) => e);
};
