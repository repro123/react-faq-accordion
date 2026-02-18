import Plus from "../images/icon-plus.svg";
import Minus from "../images/icon-minus.svg";

export default function Button({ isExpanded, question, onExpand, id }) {
  return (
    <h3>
      <button
        type="button"
        aria-expanded={isExpanded}
        className="flex items-center justify-between w-full font-bold text-left cursor-pointer group outline-active-state"
        aria-controls={`panel${id}`}
        id={`button-${id}`}
        onClick={onExpand}
      >
        <span className="group-hover:text-active-state group-active:text-active-state group-focus:text-active-state">
          {question}
        </span>
        <span className="shrink-0">
          <img
            src={isExpanded ? Minus : Plus}
            alt=""
            className="block w-12 h-12"
            aria-hidden="true"
          />
        </span>
      </button>
    </h3>
  );
}
