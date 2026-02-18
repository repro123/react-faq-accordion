export default function Answer({ id, isExpanded, answer }) {
  return (
    <div
      aria-labelledby={`button-${id}`}
      id={`panel${id}`}
      aria-hidden={!isExpanded}
      className="pt-2 ml-0 transition-all duration-500 opacity-100 aria-hidden:hidden starting:opacity-0 starting:-ml-36"
    >
      <p>{answer}</p>
    </div>
  );
}
