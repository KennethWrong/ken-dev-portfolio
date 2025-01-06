/* eslint-disable  react/no-children-prop*/
import matter from "gray-matter";
import fs from "fs";
import ReactMarkdown from "react-markdown";
import BlogIntro, { NewBlogMetadata } from "@/components/blog/BlogIntro";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import BlogContactCard from "@/components/blog/BlogContactCard";
import RecentBlogs from "@/components/blog/RecentBlogs";
import {
  CustomH1,
  CustomH2,
  CustomH3,
  CustomA,
  CustomImg,
  CustomLi,
  CustomOL,
  CustomUL,
  CustomP,
} from "@/components/blog/BlogComponents";

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
