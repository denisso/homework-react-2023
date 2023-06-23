import styles from "./movie.module.scss";
import Image from "next/image";
import { MovieProps } from "@/data/movies";
import InputNumber from "./InputNumber";

const Movie = ({ data }: { data: MovieProps }) => {
  const {
    id,
    title,
    posterUrl,
    releaseYear,
    genre,
    rating,
    director,
    description,
  } = data;
  return (
    <div className={styles.movie}>
      <div className={styles.leftSide}>
        <Image
          className={styles.poster}
          src={posterUrl}
          alt="poster"
          unoptimized={true}
          width={1000}
          height={1200}
        />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.firstLine}>
          <div className={styles.title}>
            {title} ({releaseYear})
          </div>
          <InputNumber />
        </div>
        <div><b>Жанр:</b> {genre}</div>
        <div><b>Год выпуска:</b> {releaseYear}</div>
        <div><b>Рейтинг:</b> {rating}</div>
        <div><b>Режисер:</b> {director}</div>
        <div><b>Описание:</b></div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Movie;
