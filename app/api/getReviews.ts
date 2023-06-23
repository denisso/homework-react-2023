import { reviews } from "@/data/movies";

const getReviews = (reviewIds: string[]) => {
  return reviews.filter((e) => reviewIds.includes(e.id));
};

export default getReviews;
