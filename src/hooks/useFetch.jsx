import { useState, useEffect } from "react";

export const useFetch = (api, queryTerm = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${api}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const value = await response.json();
      setData(value.results);
    }
    fetchData();
  }, [url]);
  return { data };
};
