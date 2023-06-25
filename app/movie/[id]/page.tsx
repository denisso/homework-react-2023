"use client";
import getMovie from "@/app/api/getMovie";
import Movie from "@/components/MovieSingle";
import Reviews from "@/components/Reviews";
import styles from "./page.module.scss";
import InputNumber from "@/components/InputNumber";

const Page = ({ params }: { params: { id: string } }) => {
  const data = getMovie(params.id);
  const handleInput = (arg: number) => {
    console.log("Page: ", arg);
  };
  return data ? (
    <div className={styles.page}>
      <Movie
        data={data}
        InputComponent={<InputNumber onInputChange={handleInput} />}
      />
      <Reviews data={data?.reviewIds} />
    </div>
  ) : (
    <></>
  );
};

export default Page;
