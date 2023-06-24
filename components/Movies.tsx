import styles from "./movies.module.scss";
import Image from "next/image";
import { movies, MovieProps } from "@/data/movies";
import InputNumber from "./InputNumber";
import Link from "next/link";
import BlockWrapper from "./BlockWrapper";

const Movie = ({ data }: { data: MovieProps }) => {
  const {
    id,
    title,
    posterUrl,
    releaseYear,
    genre,
  } = data;
  return (
    <BlockWrapper className={styles.movie}>
      <div className={styles.leftSide}>
        <Image
          className={styles.poster}
          src={posterUrl}
          alt="poster"
          width={100}
          height={120}
        />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.firstLine}>
          <div className={styles.title}>
            <Link href={`/movie/${id}`}>
              {title} ({releaseYear})
            </Link>
          </div>
          <InputNumber />
        </div>
        <div>Жанр: {genre}</div>
      </div>
    </BlockWrapper>
  );
};

const Movies = () => {
  return (
    <div className={styles.movies}>
      {movies.map((e) => (
        <Movie key={e.id} data={e} />
      ))}
    </div>
  );
};

export default Movies;
