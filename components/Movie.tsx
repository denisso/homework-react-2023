import styles from "./movie.module.scss";
import Image from "next/image";
import { MovieProps } from "@/data/movies";
import InputNumber from "./InputNumber";
import BlockWrapper from "./BlockWrapper";

const Movie = ({
  data,
  InputComponent,
}: {
  data: MovieProps;
  InputComponent?: React.ReactElement<typeof InputNumber>;
}) => {
  const {
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
          {InputComponent ?? <></>}
        </div>
        <div>
          <b>Жанр:</b> {genre}
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
