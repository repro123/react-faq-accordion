import faqs from "../data/faqs.jsx";
import Question from "./Question.jsx";

export default function QuestionsList() {
  return (
    <ul className="flex flex-col w-full gap-6 overflow-hidden">
      {faqs.map((faq) => (
        <Question
          key={faq.id}
          id={faq.id}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </ul>
  );
}
