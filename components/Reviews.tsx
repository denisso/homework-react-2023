import styles from "./reviews.module.scss";
import getReviews from "@/app/api/getReviews";

const Reviews = ({ data }: { data: string[] }) => {
  const reviews = getReviews(data);
  return (
    <div className={styles.reviews}>
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
