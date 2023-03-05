import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const Search = ({ api }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data } = useFetch(api, queryTerm);
  return (
    <main>
      <section className="py-6">
        <p className="text-4xl text-blue-300 dark:text-white">
          {data.length === 0
            ? `No Results Found for: ${queryTerm} :(`
            : `Found Results for: ${queryTerm}`}
        </p>
      </section>
      <section className=" max-w-7xl mx-auto pt-7">
        <div className="flex justify-start flex-wrap">
          {data.map((value) => (
            <Card key={value.id} movie={value} />
          ))}
        </div>
      </section>
    </main>
  );
};
