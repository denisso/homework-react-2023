import { reviews } from "@/data/movies";

const getReview = (id: string) => {
  const r = reviews.find((e) => e.id === id);
  return r;
};

export default getReview;