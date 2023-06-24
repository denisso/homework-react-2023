import getQuestions from "../api/getQuestions";
import Accordion from "@/components/Accordion";
import BlockWrapper from "@/components/BlockWrapper";
import styles from "./page.module.scss";

const FAQ = () => {
  const data = getQuestions();
  return (
    <div className={styles.page}>
      <BlockWrapper className={styles.title}>Вопросы и ответы</BlockWrapper>

      {data.map(({ id, title, text }) => (
        <BlockWrapper key={id}>
          <Accordion text={text} title={title} />
        </BlockWrapper>
      ))}
    </div>
  );
};

export default FAQ;
