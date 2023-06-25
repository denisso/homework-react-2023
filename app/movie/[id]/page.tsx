"use client";
import getMovie from "@/app/api/getMovie";
import Movie from "@/components/MovieSingle";
import Reviews from "@/components/Reviews";
import styles from "./page.module.scss";

const Page = ({ params }: { params: { id: string } }) => {
  const data = getMovie(params.id);
  return data ? (
    <div className={styles.page}>
      <Movie data={data} />
      <Reviews data={data?.reviewIds} />
    </div>
  ) : (
    <></>
  );
};

export default Page;
