import { baseURL } from "../axios/axiosInstance";

export const getService = (url) => {
  return baseURL
    .get(url)
    .then(({ data }) => {
      return data;
    })
    .catch((e) => e);
};
