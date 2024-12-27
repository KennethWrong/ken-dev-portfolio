import { Accordion } from "@radix-ui/react-accordion";
import TextImageRow from "../TextImageRow";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function ExperienceProjectRow({
  title,
  titleLink,
  text = [],
  achievements = [],
  contributions = [],
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
  achievements?: string[];
  contributions?: string[];
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
    <div className="flex flex-col items-center w-full">
      <TextImageRow
        title={title}
        titleLink={titleLink}
        text={text}
        images={images}
        reverseOrder={reverseOrder}
        textColour={textColour}
        textCenter={textCenter}
        textSize={textSize}
        titleBold={titleBold}
        titleCenter={titleCenter}
        titleColour={titleColour}
        titleSize={titleSize}
        itemAlign={itemAlign}
      />
      <div className="w-full">
        <Accordion type="single" collapsible className="w-full">
          {achievements.length > 0 ? (
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg lg:text-2xl font-bold">
                Achievements
              </AccordionTrigger>
              <AccordionContent>
                <ol className="list-inside text-start list-disc text-sm lg:text-md leading-loose">
                  {achievements.map((a, index) => (
                    <li className="" key={index}>
                      {a}
                    </li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          ) : (
            ""
          )}
          {contributions.length > 0 ? (
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg lg:text-2xl font-bold">
                Contributions
              </AccordionTrigger>
              <AccordionContent>
                <ol className="list-inside text-start list-disc text-sm lg:text-md leading-loose">
                  {contributions.map((c, index) => (
                    <li className="" key={index}>
                      {c}
                    </li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          ) : (
            ""
          )}
        </Accordion>
      </div>
    </div>
  );
}
