// "use client";
import styles from "./filter.module.scss";
import DropDown from "./DropDown";
import Field from "./FieldWrapper";

const Filter = () => {
  return (
    <div className={styles.block}>
      <div className={styles.title}>Фильтр поиска</div>
      {/* <Field name="Название фильма">
        <Input placeholder="Введите название" />
      </Field>
      <Field name="Жанр">
        <Select placeholder="Введите жанр" />
      </Field> */}
      <Field name="Кинотеатр">
        <DropDown placeholder="Введите кинотеатр" />
      </Field>
    </div>
  );
};
export default Filter;
