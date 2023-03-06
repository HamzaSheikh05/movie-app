import { Routes, Route } from "react-router-dom";
import { MovieList, MovieItem, InvalidUrl, Search } from "../pages";

export const Routing = () => {
  return (
    <div className="bg-custom-bg dark:bg-dark-bg">
      <Routes>
        <Route path="/" element={<MovieList api="movie/now_playing" />} />
        <Route path="movie/:id" element={<MovieItem />} />
        <Route
          path="movies/popular"
          element={<MovieList api="movie/popular" />}
        />
        <Route
          path="movies/latest"
          element={<MovieList api="movie/top_rated" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList api="movie/upcoming" />}
        />
        <Route path="search" element={<Search api="search/movie" />} />
        <Route path="*" element={<InvalidUrl />} />
      </Routes>
    </div>
  );
};
