"use client";
import React from "react";
import styles from "./page.module.scss";
import Filter from "@/components/Filter";
import BlockWrapper from "@/components/BlockWrapper";
import getMovies from "@/app/api/getMovies";
import MovieListItem from "@/components/MovieListItem";

const Movies = () => {
  const movies = getMovies();
  const handler = React.useCallback((id: string, value: number) => {
    console.log("Movies:", id, value);
  }, []);
  return (
    <div className={styles.movies}>
      {movies.map((data) => (
        <MovieListItem
          key={data.id}
          data={data}
          cbInput={(value: number) => handler(data.id, value)}
        />
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
