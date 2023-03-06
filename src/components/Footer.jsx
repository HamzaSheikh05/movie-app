import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="p-4 font-burtons bg-custom-bg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-dark-bg">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <Link to="/" className="hover:underline">
          DevelopedByHS
        </Link>{" "}
        Copyrights Reserved 2023
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="/"
            target={"_blank"}
            className="mr-4 hover:underline md:mr-6 "
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="/"
            target={"_blank"}
            className="mr-4 hover:underline md:mr-6"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="/"
            target={"_blank"}
            className="mr-4 hover:underline md:mr-6"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};
