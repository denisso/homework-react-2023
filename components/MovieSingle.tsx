import styles from "./movieSingle.module.scss";
import Image from "next/image";
import { TMovie } from "@/types";
import InputNumber from "./InputNumber";
import BlockWrapper from "./BlockWrapper";
import { Genres } from "@/redux/apiQuery/movieApi";
const Movie = ({ data }: { data: TMovie }) => {
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
    <BlockWrapper className={styles.movie}>
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
          <InputNumber movieId={data.id} />
        </div>
        <div>
          <b>Жанр:</b> {Genres[genre] ?? ""}
        </div>
        <div>
          <b>Год выпуска:</b> {releaseYear}
        </div>
        <div>
          <b>Рейтинг:</b> {rating}
        </div>
        <div>
          <b>Режисер:</b> {director}
        </div>
        <div>
          <b>Описание:</b>
        </div>
        <div>{description}</div>
      </div>
    </BlockWrapper>
  );
};

export default Movie;
