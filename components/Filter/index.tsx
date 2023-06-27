// "use client";
import React from "react";
import styles from "./filter.module.scss";
import DropDown, { DropDownItems } from "./DropDown";
import { Genres } from "@/redux/apiQuery/movieApi";
import { useGetCinemasQuery } from "@/redux/apiQuery/movieApi";
import FieldWrapper from "./FieldWrapper";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  setTitle,
  setGenre,
  setCinema,
  selectFilter,
} from "@/redux/features/filter";
import Input from "./Input";

const MovieTitle = () => {
  const { filter } = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  const name = "Название";
  const onChange = (val: string) => {
    dispatch(setTitle(val));
  };
  const onBlur = () => {
    // console.log("blur");
  };

  const onFocus = () => {};
  return (
    <FieldWrapper name={name}>
      <Input
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={"Введите название"}
        value={filter["TITLE"]}
      />
    </FieldWrapper>
  );
};

const MovieGanre = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector(selectFilter);
  const name = "Жанр";
  const onFocus = (focus: boolean) => {
    // console.log(focus);
  };
  const onChangeAndClose = (value: string) => {
    dispatch(setGenre(value));
  };
  return (
    <FieldWrapper name={name}>
      <DropDown
        items={Genres}
        placeholder="Выберите жанр"
        onFocus={onFocus}
        onChangeAndClose={onChangeAndClose}
        value={filter["GENRE"]}
      />
    </FieldWrapper>
  );
};

const MovieCinema = () => {
  const { filter } = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  const name = "Кинотеатр";
  const { data: cinemas } = useGetCinemasQuery();
  const onFocus = (focus: boolean) => {
    // console.log(focus);
  };
  const onChangeAndClose = (value: string) => {
    dispatch(setCinema(value));
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
        value={filter["CINEMA"]}
      />
    </FieldWrapper>
  );
};

const Filter = () => {
  return (
    <div className={styles.block}>
      <div className={styles.title}>Фильтр поиска</div>
      <div className={styles.filters}>
        <MovieTitle />
        <MovieGanre />
        <MovieCinema />
      </div>
    </div>
  );
};
export default Filter;
