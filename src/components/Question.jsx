import { useState } from "react";
import Button from "./Button.jsx";
import Answer from "./Answer.jsx";

export default function Question({ id, question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded((isExpanded) => !isExpanded);
  }

  return (
    <li
      className={`flex flex-col gap-2 ${id > 1 ? "pt-4 border-t border-t-border/20" : ""}`}
    >
      <Button
        question={question}
        isExpanded={isExpanded}
        onExpand={handleClick}
        id={id}
      />
      <Answer id={id} isExpanded={isExpanded} answer={answer} />
    </li>
  );
}
