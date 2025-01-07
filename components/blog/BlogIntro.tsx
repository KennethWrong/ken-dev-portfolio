import { CustomH1, CustomP } from "./BlogComponents";
import BlogTag from "./BlogTag";
import Image from "next/image";

export type BlogMetadata = {
  slug: number;
  thumbnail: string;
  title: string;
  description: string;
  author: string;
  readTime: string;
  date: string;
  tag: string;
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const NewBlogMetadata = (frontMatter: any) => {
  return {
    slug: frontMatter.slug,
    thumbnail: frontMatter.thumbnail,
    title: frontMatter.title,
    description: frontMatter.description,
    author: frontMatter.author,
    readTime: frontMatter.readTime,
    date: frontMatter.date,
    tag: frontMatter.tag,
  };
};

export default function BlogIntro({ metadata }: { metadata: BlogMetadata }) {
  return (
    <div className="flex flex-col items-center gap-y-3 mt-20">
      <img
        src={metadata.thumbnail}
        alt={metadata.title}
        className="w-full h-auto max-h-96 object-contain self-center mb-2"
      />

      {<CustomH1>{metadata.title}</CustomH1>}
      <div className="grid grid-cols-3 items-center gap-x-4 text-sm md:text-lg mt-2 text-gray-500 text-center">
        <div className="flex flex-row items-center gap-x-2">
          <Image
            src={"/images/face.png"}
            height={90}
            width={90}
            alt="author's face"
            className="rounded-full object-cover md:w-10 md:h-10 w-6 h-6"
          />
          <p className="font-bold text-2xs md:text-lg">{metadata.author}</p>
        </div>
        <p className="border-l-2 border-r-2 font-bold text-2xs md:text-lg">
          {metadata.date}
        </p>
        <p className="font-bold text-2xs md:text-lg">
          {metadata.readTime} min read
        </p>
      </div>
      <CustomP>{metadata.description}</CustomP>
      <BlogTag tag={metadata.tag} />
      <hr className="w-full my-4" />
    </div>
  );
}
