import getQuestions from "../api/getQuestions";
import Accordion from "@/components/Accordion";

const FAQ = () => {
  const data = getQuestions();
  return (
    <div>
      {data.map(({ id, title, text }) => (
        <Accordion key={id} text={text} title={title} />
      ))}
    </div>
  );
};

export default FAQ;
