import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ api }) => {
  const { data } = useFetch(api);

  return (
    <main>
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
