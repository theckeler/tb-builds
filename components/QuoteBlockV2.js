import Stars from "./StarsV2";

const QuoteBlock = ({
  quote,
  className,
  style,
  stackStars = false,
  starFill = "#FFC10F",
  fillBase = "#fff",
}) => {
  const stackEmUp = stackStars ? "flex-column" : "";
  const starCSS = stackStars ? 12 : 8;

  return (
    <div
      className={`[text-shadow:_0_0_6px_rgba(255_255_255_/_50%)] ${className}`}
      style={style}
    >
      <span className="text-2xl font-bold">{quote.title}</span>
      <Stars
        starFill={starFill}
        fillBase={fillBase}
      />

      <p className="mt-2">{quote.copy}</p>
      <ul className="flex">
        <li className="font-bold pr-2 border-r">{quote.name}</li>
        <li
          className="font-weight-normal pl-lg-2"
          dangerouslySetInnerHTML={{
            __html: quote.unit,
          }}
        ></li>
      </ul>
    </div>
  );
};

export default QuoteBlock;
