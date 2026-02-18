import Footer from "./components/Footer.jsx";
import Picture from "./components/Picture.jsx";
import Headings from "./components/Headings.jsx";
import faqs from "./data/faqs.jsx";
import Plus from "./images/icon-plus.svg";
import Minus from "./images/icon-minus.svg";
import { useState } from "react";

function App() {
  return (
    <>
      <Main />
      <Footer />
    </>
  );
}

function Main() {
  return (
    <main className="grid grid-cols-1 grid-rows-[100px_100px_1fr] w-full">
      <Picture />

      <div className="relative z-10 grid w-full col-start-1 col-end-2 row-span-2 row-start-2 p-4 place-items-center">
        <div className="flex flex-col w-full max-w-2xl gap-12 p-4 pb-8 m-auto shadow-lg rounded-2xl sm:p-8 bg-primary-white">
          <Headings />

          <QuestionsList />
        </div>
      </div>
    </main>
  );
}

function QuestionsList() {
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

function Question({ id, question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li
      className={`flex flex-col gap-2 ${id > 1 && "pt-4 border-t border-t-border/20"}`}
    >
      <h3>
        <button
          type="button"
          aria-expanded={isExpanded}
          className="flex items-center justify-between w-full font-bold text-left cursor-pointer group outline-active-state accordion__button"
          aria-controls={`panel${id}`}
          id={`button-${id}`}
        >
          <span className="group-hover:text-active-state group-active:text-active-state group-focus:text-active-state">
            {question}
          </span>
          <span className="shrink-0">
            <img
              src={Plus}
              alt=""
              className="block w-12 h-12 group-aria-expanded:hidden"
            />
            <img
              src={Minus}
              alt=""
              className="hidden group-aria-expanded:w-12 group-aria-expanded:h-12 group-aria-expanded:block"
            />
          </span>
        </button>
      </h3>
      <div
        aria-labelledby={`button-${id}`}
        id={`panel${id}`}
        aria-hidden={!isExpanded}
        className="pt-2 ml-0 transition-all duration-500 opacity-100 aria-hidden:hidden starting:opacity-0 starting:-ml-36"
      >
        <p>{answer}</p>
      </div>
    </li>
  );
}

export default App;
