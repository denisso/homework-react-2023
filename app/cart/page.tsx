"use client";
import { useSelector } from "react-redux";
import Link from "next/link";
import { selectCartMovies } from "@/redux/features/cart";
import styles from "./cart.module.scss";
import BlockWrapper from "@/components/BlockWrapper";
import MovieListItem from "@/components/MovieListItem";
import { useAppSelector } from "@/redux/store";
import { selectMovieById } from "@/redux/apiQuery/movieApi";
import Modal from "@/components/Modal";

export const CartIcon = ({ className }: { className?: string }) => {
  const movies = useSelector(selectCartMovies);
  return (
    <Link href="/cart" className={`${styles.iconBox} ${className ?? ""}`}>
      <div className={styles.badge}>
        {movies.reduce((r, e) => r + e.count, 0)}
      </div>
      <svg
        width="28"
        height="25"
        viewBox="0 0 28 25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.4936 6.675C27.304 6.46212 27.0713 6.29189 26.811 6.17554C26.5507 6.05918 26.2687 5.99935 25.9836 6H19.9936C19.9936 4.4087 19.3615 2.88258 18.2363 1.75736C17.111 0.632141 15.5849 0 13.9936 0C12.4023 0 10.8762 0.632141 9.75098 1.75736C8.62576 2.88258 7.99362 4.4087 7.99362 6H2.00362C1.7202 6.00076 1.44012 6.06127 1.18166 6.17758C0.923197 6.29389 0.692161 6.46338 0.503622 6.675C0.316658 6.88583 0.176356 7.1338 0.0919129 7.40264C0.0074692 7.67148 -0.0192106 7.95513 0.0136221 8.235L1.79612 23.235C1.85394 23.7237 2.08991 24.174 2.45891 24.4996C2.8279 24.8253 3.304 25.0034 3.79612 25H24.2024C24.6945 25.0034 25.1706 24.8253 25.5396 24.4996C25.9086 24.174 26.1446 23.7237 26.2024 23.235L27.9849 8.235C28.0175 7.95504 27.9907 7.67134 27.906 7.40249C27.8213 7.13364 27.6808 6.88573 27.4936 6.675ZM13.9936 2C15.0545 2 16.0719 2.42143 16.822 3.17157C17.5722 3.92172 17.9936 4.93913 17.9936 6H9.99362C9.99362 4.93913 10.415 3.92172 11.1652 3.17157C11.9153 2.42143 12.9328 2 13.9936 2ZM24.2136 23C24.21 23.0013 24.206 23.0013 24.2024 23H3.77487L2.00362 8H7.99362V11C7.99362 11.2652 8.09898 11.5196 8.28652 11.7071C8.47405 11.8946 8.7284 12 8.99362 12C9.25884 12 9.51319 11.8946 9.70073 11.7071C9.88826 11.5196 9.99362 11.2652 9.99362 11V8H17.9936V11C17.9936 11.2652 18.099 11.5196 18.2865 11.7071C18.4741 11.8946 18.7284 12 18.9936 12C19.2588 12 19.5132 11.8946 19.7007 11.7071C19.8883 11.5196 19.9936 11.2652 19.9936 11V8H25.9936L24.2136 23Z"
          fill="currentColor"
          stroke="currentColor"
        />
      </svg>
    </Link>
  );
};

const Movie = ({ movieId }: { movieId: string }) => {
  // получаем данные из кеша без запроса на сервер
  const movie = useAppSelector(selectMovieById(movieId));

  return <MovieListItem data={movie} />;
};

const Cart = () => {
  const movies = useSelector(selectCartMovies);
  const handleModal = (ok: boolean) => {};
  return (
    <div className={styles.cart}>
      <Modal isOpen={true} onClose={handleModal} className={styles.modal}>
        <div className={styles.title}>
          <span className={styles.titleText}>Удаление билета</span>
          <div className="icon">
            <svg
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
          </div>
        </div>
        <div className={styles.text}>Вы уверены, что хотите удалить билет?</div>
      </Modal>
      {movies.map(({ movieId }) => (
        <Movie key={movieId} movieId={movieId} />
      ))}
      <BlockWrapper className={styles.totalTickets}>
        {"Итого билетов: " + movies.reduce((r, e) => r + e.count, 0)}
      </BlockWrapper>
    </div>
  );
};

export default Cart;
