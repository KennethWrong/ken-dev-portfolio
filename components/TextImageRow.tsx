export default function TextImageRow({
  title,
  titleLink,
  text = [],
  images,
  reverseOrder = false,
  textColour = "",
  titleColour = "",
  titleSize = "text-4xl",
  textSize = "",
  titleCenter = true,
  textCenter = true,
  itemAlign = "items-center",
  titleBold = false,
}: {
  title?: string;
  titleLink?: string;
  text?: string[];
  images: { imageSrc: string; caption?: string }[];
  reverseOrder?: boolean;
  textColour?: string;
  titleColour?: string;
  titleSize?: string;
  textSize?: string;
  textCenter?: boolean;
  itemAlign?: string;
  titleBold?: boolean;
  titleCenter?: boolean;
}) {
  return (
    <div
      className={`w-full flex lg:flex-row flex-col lg:${itemAlign} items-center w-full`}
    >
      <div
        className={`flex flex-col w-full items-center ${
          textCenter ? "lg:text-center" : "lg:text-left"
        } ${reverseOrder ? "lg:order-2" : "lg:order-1"} order-2`}
      >
        {title ? (
          titleLink ? (
            <a
              href={titleLink}
              className={`${titleSize} w-full text-center mb-6 ${titleColour} ${
                titleCenter ? "lg:text-center" : "lg:text-left hover:underline"
              } ${titleBold ? "font-bold" : ""} text-blue-800`}
            >
              {title}
            </a>
          ) : (
            <h1
              className={`${titleSize} w-full text-center mb-6 ${titleColour} ${
                titleCenter ? "lg:text-center" : "lg:text-left"
              } ${titleBold ? "font-bold" : ""}`}
            >
              {title}
            </h1>
          )
        ) : (
          ""
        )}
        {text.map((t, index) => (
          <p
            key={index}
            className={`items-center text-center ${
              textCenter ? "lg:text-center" : "lg:text-left"
            } mb-4 ${textColour} lg:${textSize} text-sm leading-relaxed`}
          >
            {t}
            <span>
              <br />
            </span>
          </p>
        ))}
      </div>
      <div
        className={`flex flex-row items-center w-full lg:w-full py-10 justify-center ${
          reverseOrder ? "lg:order-1" : "lg:order-2"
        } order-1`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-full lg:w-3/4"
          >
            <img src={image.imageSrc} className="max-h-96" />
            <p className={`mt-2 ${textColour}`}>{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
