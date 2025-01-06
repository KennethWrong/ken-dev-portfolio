/* eslint-disable  react/no-children-prop*/
import matter from "gray-matter";
import fs from "fs";
import ReactMarkdown from "react-markdown";
import BlogIntro, { NewBlogMetadata } from "@/components/blog/BlogIntro";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import BlogContactCard from "@/components/blog/BlogContactCard";
import RecentBlogs from "@/components/blog/RecentBlogs";

const spaceBetween = "mb-2 md:mb-3";

export function CustomH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className={`text-xl md:text-4xl text-black font-bold leading-relaxed`}>
      {children}
    </h1>
  );
}

export function CustomH2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className={`text-lg md:text-3xl text-black font-bold ${spaceBetween} leading-relaxed`}
    >
      {children}
    </h2>
  );
}

export function CustomH3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className={`text-sm md:text-2xl text-black font-bold ${spaceBetween} leading-relaxed`}
    >
      {children}
    </h3>
  );
}

export function CustomP({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={`text-base text-gray-800 ${spaceBetween} leading-relaxed md:text-lg text-xs`}
    >
      {children}
    </p>
  );
}

export function CustomA({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="text-blue-500 hover:cursor-pointer hover:underline"
      href={href}
      rel="noreferer noopener"
    >
      {children}
    </a>
  );
}

export function CustomOL({ children }: { children: React.ReactNode }) {
  return <ol className="list-decimal">{children}</ol>;
}

export function CustomUL({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc">{children}</ul>;
}

export function CustomLi({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-base text-gray-800 ml-6">
      <CustomP>{children}</CustomP>
    </li>
  );
}

export function CustomImg({
  src,
  alt,
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className=" w-10/12 md:max-w-3xl h-auto my-4 self-center"
    />
  );
}

function GetMDXComponent() {
  const overrideComponents = {
    h1: CustomH1,
    h2: CustomH2,
    h3: CustomH3,
    p: CustomP,
    a: CustomA,
    ol: CustomOL,
    ul: CustomUL,
    li: CustomLi,
    img: CustomImg,
  };

  return overrideComponents;
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = (await params).id;
  const fileData = fs.readFileSync(`content/blogs/${slug}.mdx`); // get the file data
  const { data, content } = matter(fileData); // extract the front matter and the content

  const overrideComponents = GetMDXComponent();

  return (
    <div className="items-center p-6 mt-30 md:mt-20 flex flex-col">
      <div className="flex flex-col font-[Raleway] w-full md:w-4/5 lg:w-3/5 lg:max-w-3xl md:max-w-4xl">
        <BlogIntro metadata={NewBlogMetadata(data)} />
        <ReactMarkdown
          remarkPlugins={[remarkBreaks]}
          rehypePlugins={[rehypeRaw]}
          children={content.replace(/\n/gi, "&nbsp; \n")}
          components={overrideComponents}
          className={"flex flex-col"}
        />
        <ReactMarkdown />
        <div className="mt-10"></div>
        <BlogContactCard />
        <div className="mt-10"></div>
        <RecentBlogs />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: "welcome" }, { slug: "about" }];
}

export const dynamicParams = false;
