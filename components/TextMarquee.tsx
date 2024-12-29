type MarqueeItem = {
  text: string;
  colour: string;
};

export default function TextMarquee({
  items,
  font = "font-mono",
}: {
  items: MarqueeItem[];
  font?: string;
}) {
  return (
    <div className="relative flex overflow-x-hidden border-t-2 border-b-2">
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
