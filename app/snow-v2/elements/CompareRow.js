import ResponsiveImage from "@/components/ResponsiveImage";

export default function CompareRow({ block, numRows, rowNum }) {
  function makeID(id) {
    return id.replace(/\s+/g, "-", "-").replace(/\d+/g, "").toLowerCase();
  }

  return (
    <>
      {block.row.map((block, i) => {
        console.log(block.asterisk);
        const rowCopy = `${block.copy}${block.asterisk ? "*" : ""}`;

        return (
          <li
            className={`flex flex-col justify-center p-2 border-neutral-400 ${
              i < 3 && "border-r"
            } ${i < 4 && rowNum < numRows - 1 && "border-b"} ${
              i === 0 ? "font-bold" : ""
            }`}
            key={i}
          >
            {block.title && (
              <div className="font-bold text-center text-lg mb-2">
                {block.title}
              </div>
            )}
            {block.logo && (
              <div className="relative lg:min-h-[4rem] lg:px-2 mb-1">
                <ResponsiveImage
                  // id={makeID(block.copy)}
                  src={block.logo}
                  className="w-full h-full"
                />
              </div>
            )}
            {block.img && (
              <div className="relative lg:max-h-[4rem] lg:px-4 mb-1">
                <ResponsiveImage
                  src={block.img}
                  className="w-full h-full"
                />
              </div>
            )}
            {block.copy && (
              <div
                className={`w-full ${i !== 0 && "text-center"} ${
                  !!block.className && block.className
                }`}
                dangerouslySetInnerHTML={{
                  __html: rowCopy,
                }}
              />
            )}
            {block.active && (
              <div className="flex justify-center items-center text-2xl">•</div>
            )}
          </li>
        );
      })}
    </>
  );
}
