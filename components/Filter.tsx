// "use client";
import styles from "./filter.module.scss";

const Input = ({placeholder}: {placeholder: string}) => {
  return <input type="text" className={styles.input} placeholder={placeholder}/>;
};

const Select = ({placeholder}: {placeholder: string}) => {

  return (
    <div className={styles.select}>
      <div className={styles.placeholder}>
        {placeholder}
      </div>
      <svg className={styles.icon}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.50008 17.9583H11.5001C16.0251 17.9583 17.9584 16.025 17.9584 11.5V6.49996C17.9584 1.97496 16.0251 0.041626 11.5001 0.041626H6.50008C1.97508 0.041626 0.041748 1.97496 0.041748 6.49996V11.5C0.041748 16.025 1.97508 17.9583 6.50008 17.9583ZM1.29175 6.49996C1.29175 2.65829 2.65841 1.29163 6.50008 1.29163H11.5001C15.3417 1.29163 16.7084 2.65829 16.7084 6.49996V11.5C16.7084 15.3416 15.3417 16.7083 11.5001 16.7083H6.50008C2.65841 16.7083 1.29175 15.3416 1.29175 11.5V6.49996ZM8.55842 11.2417C8.68342 11.3667 8.84175 11.4251 9.00008 11.4251C9.15842 11.4251 9.31675 11.3667 9.44175 11.2417L12.3834 8.30006C12.6251 8.05839 12.6251 7.65839 12.3834 7.41672C12.1418 7.17506 11.7418 7.17506 11.5001 7.41672L9.00008 9.91672L6.50008 7.41672C6.25842 7.17506 5.85842 7.17506 5.61675 7.41672C5.37508 7.65839 5.37508 8.05839 5.61675 8.30006L8.55842 11.2417Z"
          fill="#999FA6"
        />
      </svg>
    </div>
  );
};

const Field = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  return (
    <div className={styles.filed}>
      <div className={styles.name}>{name}</div>
      <div className={styles.component}>{children}</div>
    </div>
  );
};

const Filter = () => {
  return (
    <div className={styles.block}>
      <div className={styles.title}>Фильтр поиска</div>
      <Field name="Название фильма" >
        <Input placeholder="Введите название"/>
      </Field>
      <Field name="Жанр">
        <Select placeholder="Введите жанр"/>
      </Field>
      <Field name="Кинотеатр">
        <Select placeholder="Введите кинотеатр"/>
      </Field>
    </div>
  );
};
export default Filter;
