import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfilePic from "../assets/Profile.png";
import { useUpdateTitle } from "../hooks/useUpdateTitle";

export const MovieItem = () => {
  const params = useParams();
  const [item, setItem] = useState({});
  const imagePath = item.poster_path
    ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
    : ProfilePic;

  useEffect(() => {
    async function fetchIndividualMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=658a1ff1fadd1cfd231b07ea0d4bbfaf`
      );
      const data = await response.json();
      setItem(data);
      console.log(data);
    }
    fetchIndividualMovie();
  }, [params.id]);

  useUpdateTitle(item.title);
  return (
    <main>
      <section className="flex justify-around flex-wrap py-4">
        <div className="max-w-sm">
          <img className="rounded" src={imagePath} alt={item.title} />
        </div>
        <div className="max-w-2xl text-blue-100 text-xl dark:text-white">
          <h1 className="text-4xl font-bold my-2 text-center lg:text-left">
            {item.title}
          </h1>
          <p className="my-3 text-left">{item.overview}</p>
          {item.genres ? (
            <p className="my-5 flex flex-wrap gap-3">
              {item.genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-300 rounded dark:border-gray-700 p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              {item.vote_average}
            </p>
          </div>

          <p className="my-3 text-left">
            <span className="mr-2 font-medium">Running Time:</span>
            <span>{item.runtime} mins</span>
          </p>
          <p className="my-3 text-left">
            <span className="mr-2 font-medium">Budget:</span>
            <span>{item.budget}</span>
          </p>
          <p className="my-3 text-left">
            <span className="mr-2 font-medium">Revenue:</span>
            <span>{item.revenue}</span>
          </p>
          <p className="my-3 text-left">
            <span className="mr-2 font-medium">Date Released:</span>
            <span>{item.release_date}</span>
          </p>
          <p className="my-3 text-left">
            <span className="mr-2 font-medium">IMDB Code:</span>
            <a
              href={`https://www.imdb.com/title/${item.imdb_id}`}
              target={"_blank"}
              rel="noreferrer"
            >
              {item.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
