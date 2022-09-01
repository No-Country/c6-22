import { useEffect, useState } from "react";
import { getService } from "../services/getService";

export const useFetch = (url = "") => {
  const [results, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getService(url)
      .then((data) => {
        setResult(data);
        setLoading(false);
      })
      .catch((e) => setError(e));
  }, [url]);

  return { results, loading, error };
};
