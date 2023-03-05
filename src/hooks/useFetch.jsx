import { useState, useEffect } from "react";

export const useFetch = (api) => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${api}?api_key=658a1ff1fadd1cfd231b07ea0d4bbfaf`;

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
