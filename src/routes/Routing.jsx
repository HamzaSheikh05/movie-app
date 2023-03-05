import { Routes, Route } from "react-router-dom";
import { MovieList, MovieItem, InvalidUrl, Search } from "../pages";

export const Routing = () => {
  return (
    <div className="dark:bg-gray-900">
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="movie/:id" element={<MovieItem />} />
        <Route path="movies/popular" element={<MovieList />} />
        <Route path="movies/latest" element={<MovieList />} />
        <Route path="movies/upcoming" element={<MovieList />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<InvalidUrl />} />
      </Routes>
    </div>
  );
};
