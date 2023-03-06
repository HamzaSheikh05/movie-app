import { Routes, Route } from "react-router-dom";
import { MovieList, MovieItem, InvalidUrl, Search } from "../pages";

export const Routing = () => {
  return (
    <div className="bg-custom-bg dark:bg-dark-bg">
      <Routes>
        <Route
          path=""
          element={<MovieList api="movie/now_playing" title="Home" />}
        />
        <Route path="movie/:id" element={<MovieItem />} />
        <Route
          path="movies/popular"
          element={<MovieList api="movie/popular" title="Popular" />}
        />
        <Route
          path="movies/latest"
          element={<MovieList api="movie/top_rated" title="High Rated" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList api="movie/upcoming" title="Upcoming Movies" />}
        />
        <Route path="search" element={<Search api="search/movie" />} />
        <Route path="*" element={<InvalidUrl title="Error 404" />} />
      </Routes>
    </div>
  );
};
