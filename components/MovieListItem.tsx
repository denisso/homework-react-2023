import styles from "./movieListItem.module.scss";
import Image from "next/image";
import { MovieProps } from "@/data/movies";
import InputNumber from "./InputNumber";
import Link from "next/link";
import BlockWrapper from "./BlockWrapper";

type Props = {
  data: MovieProps;
  cbInput?: (arg: number) => void;
  cbDelete?: () => void;
};

const MovieListItem = ({ data, cbInput, cbDelete }: Props) => {
  const { id, title, posterUrl, releaseYear, genre } = data;
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
          <InputNumber onInputChange={cbInput} />
          {cbDelete ? <button onClick={cbDelete}>X</button> : <></>}
        </div>
        <div>Жанр: {genre}</div>
      </div>
    </BlockWrapper>
  );
};

export default MovieListItem;
