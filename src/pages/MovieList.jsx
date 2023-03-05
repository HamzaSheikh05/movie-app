import { useState, useEffect } from "react";
import { Card } from "../components/Card";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=658a1ff1fadd1cfd231b07ea0d4bbfaf"
      );
      const data = await response.json();
      setMovies(data.results);
    }
    fetchData();
  }, []);
  return (
    <main>
      <section className=" max-w-7xl mx-auto pt-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((value, index) => (
            <Card key={value.id} movie={value} />
          ))}
        </div>
      </section>
    </main>
  );
};
