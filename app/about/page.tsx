import BlockWrapper from "@/components/BlockWrapper";
import path from "path";
import fs from "fs";
import styles from "./page.module.scss";


const Page = () => {
  let content: string[] = [];
  try {
    // получаем данные из файла на сервере 
    const jsonDirectory = path.join(process.cwd(), "public", "data");
    content = JSON.parse(
      fs.readFileSync(jsonDirectory + "/about.json", "utf8")
    );
  } catch (e) {}
  return (
    <BlockWrapper>
      <div className={styles.page}>
        {Array.isArray(content) &&
          content.map((e, i) => (
            <p className={styles.paragraph} key={i}>
              {e}
            </p>
          ))}
      </div>
    </BlockWrapper>
  );
};

export default Page;
