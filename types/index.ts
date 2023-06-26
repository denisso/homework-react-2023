export type TMovie = {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
};

export type TCinema = {
  id: string;
  name: string;
  movieIds: string[];
};

export type TReview = {
  id: string,
  name: string,
  text: string,
  rating: number
}