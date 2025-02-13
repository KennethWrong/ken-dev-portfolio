export default function BlogTag({
  tag,
  center = false,
}: {
  tag: string;
  center?: boolean;
}) {
  // Convert string array to array if it's a string
  const tagArray = typeof tag === "string" ? [tag] : tag;

  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      {tagArray.map((t, i) => (
        <div
          key={i}
          className={`flex flex-col text-center mb-2 ${
            center ? "items-center" : "items-start"
          }`}
        >
          <p className="text-3xs md:text-xs text-gray-600 bg-gray-200 rounded-lg py-1 px-2 uppercase font-bold">{`${t}`}</p>
        </div>
      ))}
    </div>
  );
}
