import { Link } from "react-router-dom";
import ProfilePic from "../assets/Profile.png";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const imagePath = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : ProfilePic;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg animate-ping shadow dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={imagePath} alt="movie-images" />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-3xl font-medium tracking-tight font-burtons text-gray-800 dark:text-white">
            {original_title}
          </h5>
        </Link>
        <p className="mb-3 font-normal font-serif text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  );
};
