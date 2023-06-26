"use client";
import Movie from "@/components/MovieSingle";
import Reviews from "@/components/Reviews";
import styles from "./page.module.scss";
import { useAppSelector } from "@/redux/store";
import { selectMovieById } from "@/redux/apiQuery/movieApi";

const Page = ({ params }: { params: { id: string } }) => {
  // получаем данные из кеша без запроса на сервер
  const movie = useAppSelector(selectMovieById(params.id));

  return movie ? (
    <div className={styles.page}>
      <Movie data={movie} />
      <Reviews data={movie?.reviewIds} />
    </div>
  ) : (
    <></>
  );
};

export default Page;
