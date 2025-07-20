type MarqueeItem = {
  text: string;
  colour: string;
};

export default function TextMarquee({
  items,
  font = "font-mono",
  border = true,
}: {
  items: MarqueeItem[];
  font?: string;
  border?: boolean;
}) {
  return (
    <div
      className={`relative flex overflow-x-hidden ${
        border ? "border-t-2 border-b-2" : ""
      }`}
      id={"tech"}
    >
      <div className="py-12 animate-marquee whitespace-nowrap">
        {items.map((item, index) => (
          <span className={`${item.colour} mx-4 text-6xl ${font}`} key={index}>
            {item.text}
          </span>
        ))}
      </div>

      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        {items.map((item, index) => (
          <span className={`${item.colour} mx-4 text-6xl ${font}`} key={index}>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
