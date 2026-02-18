import Picture from "./Picture.jsx";
import Headings from "./Headings.jsx";
import QuestionsList from "./QuestionsList.jsx";

export default function Main() {
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
