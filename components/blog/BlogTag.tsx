export default function BlogTag({
  tag,
  center = false,
}: {
  tag: string;
  center?: boolean;
}) {
  return (
    <div
      className={`flex flex-col text-center mb-2 ${
        center ? "items-center" : "items-start"
      }`}
    >
      <p className="text-3xs md:text-xs text-gray-600 bg-gray-200 rounded-lg py-1 px-2 uppercase font-bold">{`${tag}`}</p>
    </div>
  );
}
