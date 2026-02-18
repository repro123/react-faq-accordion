import Star from "../images/icon-star.svg";

export default function Headings() {
  return (
    <>
      <h1 className="sr-only">Frontend Mentor</h1>
      <h2 className="flex items-center gap-4 mt-4 font-bold">
        <span>
          <img src={Star} alt="" className="inline-block w-8 h-8" />
        </span>
        <span className="text-4xl font-bold">
          <abbr title="Frequently Asked Questions" className="no-underline">
            FAQs
          </abbr>
        </span>
      </h2>
    </>
  );
}
