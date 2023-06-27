// "use client";
import React from "react";
import styles from "./filter.module.scss";
import DropDown, { DropDownItems } from "./DropDown";
import { Genres } from "@/redux/apiQuery/movieApi";
import { useGetCinemasQuery } from "@/redux/apiQuery/movieApi";
import FieldWrapper from "./FieldWrapper";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setFilter, selectFilter } from "@/redux/features/filter";
import Input from "./Input";

const MovieName = () => {
  const name = "Название";
  const onChange = (val: string) => {
    console.log(val);
  };
  const onBlur = () => {
    console.log("blur");
  };

  const onFocus = () => {

  }
  return (
    <FieldWrapper name={name}>
      <Input onBlur={onBlur} onChange={onChange} onFocus={onFocus} placeholder={"Введите название"}/>
    </FieldWrapper>
  );
};

const MovieGanre = () => {
  const name = "Жанр";
  const onFocus = (focus: boolean) => {
    console.log(focus);
  };
  const onChangeAndClose = (value: string) => {
    console.log("dd value", value);
  };
  return (
    <FieldWrapper name={name}>
      <DropDown
        items={Genres}
        placeholder="Выберите жанр"
        onFocus={onFocus}
        onChangeAndClose={onChangeAndClose}
      />
    </FieldWrapper>
  );
};
const MovieCinema = () => {
  const name = "Кинотеатр";
  const { data: cinemas } = useGetCinemasQuery();
  const onFocus = (focus: boolean) => {
    console.log(focus);
  };
  const onChangeAndClose = (value: string) => {
    console.log("dd value", value);
  };
  const items: DropDownItems[] =
    cinemas?.reduce<DropDownItems[]>((r, e) => {
      const item: DropDownItems = { value: e.id, text: e.name };
      r.push(item);
      return r;
    }, []) ?? [];
  return (
    <FieldWrapper name={name}>
      <DropDown
        items={items}
        placeholder="Выберите кинотеатр"
        onFocus={onFocus}
        onChangeAndClose={onChangeAndClose}
      />
    </FieldWrapper>
  );
};
const Filter = () => {
  const dispatch = useAppDispatch();
  const [movieName, setMovieName] = React.useState("");

  const [cinemaID, setCinemaID] = React.useState("");
  const handleSubmit = () => {
    dispatch(
      setFilter({
        TITLE: movieName,
        GENRE: "",
        CINEMA: cinemaID,
      })
    );
  };
  return (
    <div className={styles.block}>
      <div className={styles.title}>Фильтр поиска</div>
      <div className={styles.filters}>
        <MovieName />
        <MovieGanre />
        <MovieCinema />
      </div>
    </div>
  );
};
export default Filter;
