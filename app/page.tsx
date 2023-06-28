"use client";
import React from "react";
import styles from "./page.module.scss";
import FilterComponent from "@/components/Filter";
import BlockWrapper from "@/components/BlockWrapper";
import MovieListItem from "@/components/MovieListItem";
import { selectAllMovies } from "@/redux/apiQuery/movieApi";
import type { TMovie } from "@/types";
import { selectFilter, Filter } from "@/redux/features/filter";
import { movieApi } from "@/redux/apiQuery/movieApi";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная страница",
};

const filterMovies = (movies: TMovie[], filter: Filter) => {
  const { GENRE, TITLE } = filter;
  return movies.filter((movie) => {
    return (
      (!GENRE || movie.genre === GENRE) &&
      (!TITLE || movie.title.toLowerCase().includes(TITLE.toLowerCase()))
    );
  });
};

const Movies = () => {
  const [movies, setMovies] = React.useState<TMovie[]>([]);
  const { filter } = useAppSelector(selectFilter);
  const [cinemaId, setCinimaId] = React.useState("");

  // получаем данные из кеша без запроса на сервер
  const moviesAll = useAppSelector(selectAllMovies);

  const dispatch = useAppDispatch();

  // проверка чтобы не было повторныз запросов с одинаковыми данными фильтра
  const prevFilter = React.useRef("");

  // Выборка с сервера по cinemaId
  // https://redux-toolkit.js.org/rtk-query/api/created-api/endpoints
  const selectMoviesByCinema = React.useMemo(
    () => movieApi.endpoints.getMoviesByCinema.select(cinemaId),
    [cinemaId]
  );

  const { data: moviesByCinema } = useAppSelector(selectMoviesByCinema);

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

  React.useEffect(() => {
    if (filter.CINEMA === "" && moviesAll.length) {
      setMovies(filterMovies(moviesAll, filter));
    } else {
      if (!Array.isArray(moviesByCinema)) return;
      setMovies(filterMovies(moviesByCinema, filter));
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
        <FilterComponent />
      </BlockWrapper>
      <div className={styles.rightSide}>
        <Movies />
      </div>
    </div>
  );
}
