import { Link } from "react-router-dom";
import ProfilePic from "../assets/Profile.png";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const imagePath = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : ProfilePic;
  return (
    <div className="flex flex-col max-w-xs rounded-lg m-6 border border-gray-200 animate-ping dark:shadow-lg dark:shadow-blue-400 dark:bg-dark-bg dark:border-gray-300">
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg w-full h-[400px] object-fill"
          src={imagePath}
          alt="movie-images"
        />
      </Link>

      <div className="p-3 flex flex-col items-center">
        <Link to={`/movie/${id}`}>
          <h5 className="text-3xl mb-3 underline font-medium tracking-tight font-burtons text-gray-800 dark:text-blue-200">
            {original_title}
          </h5>
        </Link>

        <p className="mb-2 font-medium tracking-normal font-serif text-gray-700 dark:text-gray-300">
          {overview}
        </p>
      </div>
    </div>
  );
};
