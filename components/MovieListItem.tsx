import styles from "./movieListItem.module.scss";
import Image from "next/image";
import { TMovie } from "@/types";
import InputNumber from "./InputNumber";
import Link from "next/link";
import BlockWrapper from "./BlockWrapper";
import { Genres } from "@/redux/apiQuery/movieApi";
type Props = {
  data?: TMovie;
  onDelete?: () => void;
};

const MovieListItem = ({ data, onDelete }: Props) => {
  if (!data) return <></>;
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
          <div className={styles.buttons}>
            <InputNumber movieId={data.id} />
            {onDelete instanceof Function && (
              <svg
                className={styles.btnDelete}
                onClick={onDelete}
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7074 24.2924C25.8004 24.3854 25.8741 24.4957 25.9243 24.6171C25.9746 24.7384 26.0005 24.8686 26.0005 24.9999C26.0005 25.1313 25.9746 25.2614 25.9243 25.3828C25.8741 25.5042 25.8004 25.6145 25.7074 25.7074C25.6145 25.8004 25.5042 25.8741 25.3828 25.9243C25.2614 25.9746 25.1313 26.0005 24.9999 26.0005C24.8686 26.0005 24.7384 25.9746 24.6171 25.9243C24.4957 25.8741 24.3854 25.8004 24.2924 25.7074L15.9999 17.4137L7.70745 25.7074C7.5198 25.8951 7.26531 26.0005 6.99995 26.0005C6.73458 26.0005 6.48009 25.8951 6.29245 25.7074C6.1048 25.5198 5.99939 25.2653 5.99939 24.9999C5.99939 24.7346 6.10481 24.4801 6.29245 24.2924L14.5862 15.9999L6.29245 7.70745C6.1048 7.5198 5.99939 7.26531 5.99939 6.99995C5.99939 6.73458 6.1048 6.48009 6.29245 6.29245C6.48009 6.1048 6.73458 5.99939 6.99995 5.99939C7.26531 5.99939 7.5198 6.1048 7.70745 6.29245L15.9999 14.5862L24.2924 6.29245C24.4801 6.10481 24.7346 5.99939 24.9999 5.99939C25.2653 5.99939 25.5198 6.1048 25.7074 6.29245C25.8951 6.48009 26.0005 6.73458 26.0005 6.99995C26.0005 7.26531 25.8951 7.5198 25.7074 7.70745L17.4137 15.9999L25.7074 24.2924Z"
                  fill="#333333"
                />
              </svg>
            )}
          </div>
        </div>
        <div>Жанр: {Genres[genre] ?? ""}</div>
      </div>
    </BlockWrapper>
  );
};

export default MovieListItem;
