"use client";
import React from "react";
import styles from "./page.module.scss";
import Filter from "@/components/Filter2";
import BlockWrapper from "@/components/BlockWrapper";
import MovieListItem from "@/components/MovieListItem";
import { selectAllMovies } from "@/redux/apiQuery/movieApi";
import type { TMovie } from "@/types";
import { selectFilter } from "@/redux/features/filter";
import { movieApi } from "@/redux/apiQuery/movieApi";
import { useAppDispatch, useAppSelector } from "@/redux/store";

const Movies = () => {
  const [movies, setMovies] = React.useState<TMovie[]>([]);
  const { filter } = useAppSelector(selectFilter);
  const [cinemaId, setCinimaId] = React.useState("");

  // получаем данные из кеша без запроса на сервер
  const moviesAll = useAppSelector(selectAllMovies) as TMovie[];

  const dispatch = useAppDispatch();

  // для проверки на одинаковые запросы
  const prevFilter = React.useRef("");

  // Выборка с сервера по cinemaId
  // https://redux-toolkit.js.org/rtk-query/api/created-api/endpoints
  const selectMoviesByCinema = React.useMemo(
    () => movieApi.endpoints.getMoviesByCinema.select(cinemaId),
    [cinemaId]
  );

  const { data: moviesByCinema } = useAppSelector(selectMoviesByCinema);

  console.log(filter);
  React.useEffect(() => {
    const filterJSON = JSON.stringify(filter);
    if (prevFilter.current !== JSON.stringify(filter)) {
      if (filter.CINEMA !== "") {
        setCinimaId(filter.CINEMA);
      }
    }
    prevFilter.current = filterJSON;
  }, [filter, dispatch]);

  React.useEffect(() => {
    if (cinemaId === "") return;
    const result = dispatch(
      movieApi.endpoints.getMoviesByCinema.initiate(filter.CINEMA)
    );
    return result.unsubscribe;
  }, [dispatch, cinemaId, filter]);

  console.log("Movies moviesByCinema", moviesByCinema?.length);

  React.useEffect(() => {
    if (filter.CINEMA === "" && moviesAll.length) {
      if (typeof filter.TITLE === "string" && filter.TITLE !== "") {
        setMovies(
          moviesAll.filter((e) => e.title.includes(filter?.TITLE ?? ""))
        );
      } else {
        setMovies(moviesAll);
      }
    } else {
      if (!Array.isArray(moviesByCinema)) return;
      if (typeof filter.TITLE === "string" && filter.TITLE !== "") {
        setMovies(
          moviesByCinema.filter((e) => e.title.includes(filter?.TITLE ?? ""))
        );
      } else {
        setMovies(moviesByCinema);
      }
    }
  }, [moviesAll, moviesByCinema, filter]);

  return (
    <div className={styles.movies}>
      {movies.map((data) => (
        <MovieListItem key={data.id} data={data} />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className={styles.block}>
      <BlockWrapper className={styles.leftSide}>
        <Filter />
      </BlockWrapper>
      <div className={styles.rightSide}>
        <Movies />
      </div>
    </div>
  );
}
