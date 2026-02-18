import BackgroundDesktop from "../images/background-pattern-desktop.svg";
import BackgroundMobile from "../images/background-pattern-mobile.svg";

export default function Picture() {
  return (
    <picture className="relative w-full col-start-1 col-end-2 row-span-2 row-start-1">
      <source media="(min-width: 48rem)" srcSet={BackgroundDesktop} />
      <img
        src={BackgroundMobile}
        alt=""
        className="object-cover w-full h-full"
      />
    </picture>
  );
}
