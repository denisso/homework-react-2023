import Accordion from "@/components/Accordion";
import BlockWrapper from "@/components/BlockWrapper";
import path from "path";
import fs from "fs";
import styles from "./page.module.scss";

const FAQ = () => {
  let content: { q: string; a: string }[] = [];
  try {
    // получаем данные из файла на сервере 
    const jsonDirectory = path.join(process.cwd(), "public", "data");
    content = JSON.parse(fs.readFileSync(jsonDirectory + "/faq.json", "utf8"));
  } catch (e) {}
  return (
    <div className={styles.page}>
      <BlockWrapper className={styles.title}>Вопросы и ответы</BlockWrapper>

      {Array.isArray(content) && content.map(({ q, a }, id) => (
        <Accordion text={a} title={q} key={id} />
      ))}
    </div>
  );
};

export default FAQ;
