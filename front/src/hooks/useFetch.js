import { useEffect, useState } from "react";
import { baseURL } from "../axios/axiosInstance";

export const useFetch = (url = "") => {
  const [results, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetching = () => {
    baseURL
      .get(url)
      .then(({ data }) => {
        setResult(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  };

  useEffect(() => {
    fetching();
  }, []);

  return { results, loading, error };
};
