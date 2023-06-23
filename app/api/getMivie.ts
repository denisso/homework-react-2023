import { movies } from "@/data/movies";

const getMovie = (id: string) => {
  const r = movies.find((e) => e.id === id);
  return r;
};

export default getMovie;
