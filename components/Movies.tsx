import styles from "./movies.module.scss";
import Image from "next/image";
import movies, { MovieProps } from "@/data/movies";
import InputNumber from "./InputNumber";

const Movie = ({ data }: { data: MovieProps }) => {
  const { title, posterUrl, releaseYear, genre } = data;
  return (
    <div className={styles.movie}>
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
            {title} ({releaseYear})
          </div>
          <InputNumber />
        </div>
        <div>Жанр: {genre}</div>
      </div>
    </div>
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
