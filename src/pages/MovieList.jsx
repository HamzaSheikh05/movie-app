import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useUpdateTitle } from "../hooks/useUpdateTitle";

export const MovieList = ({ api, title }) => {
  const { data } = useFetch(api);
  useUpdateTitle(title);
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
