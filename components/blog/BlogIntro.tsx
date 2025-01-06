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
    <div className="flex flex-col leading-loose items-center gap-y-3">
      <img
        src={metadata.thumbnail}
        alt={metadata.title}
        className="h-96 w-10/12 object-contain self-center"
      />
      <h1 className="text-xl md:text-5xl font-bold mt-5">{metadata.title}</h1>
      <div className="grid grid-cols-3 items-center gap-x-4 text-sm md:text-lg mt-2 text-gray-500 text-center">
        <div className="flex flex-row items-center gap-x-2">
          <Image
            src={"/images/face.png"}
            height={90}
            width={90}
            alt="author's face"
            className="rounded-full object-cover md:w-10 md:h-10 w-6 h-6"
          />
          <p className="font-bold">{metadata.author}</p>
        </div>
        <p className="border-l-2 border-r-2 font-bold">{metadata.date}</p>
        <p className="font-bold">{metadata.readTime} min read</p>
      </div>
      <p>{metadata.description}</p>
      <BlogTag tag={metadata.tag} />
      <hr className="w-full my-4" />
    </div>
  );
}
