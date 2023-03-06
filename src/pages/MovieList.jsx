import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ api }) => {
  const { data } = useFetch(api);
  /** bg-linear-gradient(
    to right,
    #0f0c29,
    #302b63,
    #24243e
  ) */
  return (
    <main className="min-w-full">
      <section className="mx-auto py-7">
        <div className="flex justify-center flex-wrap other:justify-evenly">
          {data.map((value) => (
            <Card key={value.id} movie={value} />
          ))}
        </div>
      </section>
    </main>
  );
};
