import styles from "./reviews.module.scss";
import { useGetReviewByMovieQuery } from "@/redux/apiQuery/movieApi";
import { Spinner } from "./Spinner";
const Reviews = ({ movieId }: { movieId: string }) => {
  const {
    data: reviews = [],
    isLoading,
    isError,
  } = useGetReviewByMovieQuery(movieId);

  if (isError) return <>Error</>;

  return (
    <div className={styles.reviews}>
      {isLoading && <Spinner />}
      {reviews.map(({ id, name, text, rating }) => (
        <div key={id} className={styles.review}>
          <div className={styles.avatar}>
            <div className={styles.img}></div>
          </div>
          <div className={styles.name}>{name}</div>
          <div className={styles.rating}>Оценка: {rating}</div>
          <div className={styles.text}>{text}</div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
