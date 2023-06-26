// "use client";
import React from "react";
import styles from "./filter.module.scss";
import DropDown from "./DropDown";
import Field from "./FieldWrapper";
import debounce from "@/utils/debounce";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, } from "@/redux/features/filter";


const Filter = () => {
  // useGetMovieQuery("CTfrB5PGEJHBwxCNlU4uo")
  // const {
  //   data: movie,
  //   isLoading,
  //   isError,
  //   error,
  //   refetch,
  // } = useGetMoviesQuery();
  const dispatch = useDispatch() 
  const [movieName, setMovieName] = React.useState("");
  
  const [cinemaID, setCinemaID] = React.useState("");
  const handleSubmit = () => {
    dispatch(setFilter({
      TITLE: movieName,
      GENRE: "",
      CINEMA: cinemaID,
    }))
  };
  return (
    <div className={styles.block}>
      <div className={styles.title}>Фильтр поиска</div>
      <div>
        <input
          type="text"
          onChange={(e) => setMovieName(e.target.value)}
          value={movieName}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setCinemaID(e.target.value)}
          value={cinemaID}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit Movies by cinema</button>
      </div>

      {/* <Field name="Название фильма">
        <Input placeholder="Введите название" />
      </Field>
      <Field name="Жанр">
        <Select placeholder="Введите жанр" />
      </Field> */}
      {/* <Field name="Кинотеатр">
        <DropDown placeholder="Введите кинотеатр" />
      </Field> */}
    </div>
  );
};
export default Filter;
