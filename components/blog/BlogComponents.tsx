import fs from "fs";
import matter from "gray-matter";
import { NewBlogMetadata } from "./BlogIntro";
import path from "path";

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

export async function GetBlogs() {
  const directory = path.join(process.cwd(), "content/blogs");
  let files = fs.readdirSync(directory); // get the files
  files = files.filter((file) => file.split(".")[1] == "mdx"); // filter only the mdx files
  const posts = files.map((file) => {
    // for each file extract the front matter and the slug
    const fileData = fs.readFileSync(`content/blogs/${file}`, "utf-8");
    const { data } = matter(fileData);
    return NewBlogMetadata(data);
  });
  return posts;
}
