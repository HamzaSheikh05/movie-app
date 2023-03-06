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
            href="https://www.instagram.com/saadiatrading/"
            target={"_blank"}
            className="mr-4 hover:underline md:mr-6"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/hamza-s-287268118/"
            target={"_blank"}
            className="mr-4 hover:underline md:mr-6"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/HamzaSheikh05"
            target={"_blank"}
            className="mr-4 hover:underline md:mr-6"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};
