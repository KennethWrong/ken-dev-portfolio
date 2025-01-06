import matter from "gray-matter";
import fs from "fs";
import Link from "next/link";
import Image from "next/image";
import { BlogMetadata, NewBlogMetadata } from "@/components/blog/BlogIntro";
import BlogTag from "@/components/blog/BlogTag";
import BlogCard from "@/components/blog/BlogCard";

export async function GetBlogs() {
  let files = fs.readdirSync("content/blogs"); // get the files
  files = files.filter((file) => file.split(".")[1] == "mdx"); // filter only the mdx files
  const posts = files.map((file) => {
    // for each file extract the front matter and the slug
    const fileData = fs.readFileSync(`content/blogs/${file}`, "utf-8");
    const { data } = matter(fileData);
    return data;
  });
  return posts;
}

export default async function Page() {
  let blogs = await GetBlogs();

  return (
    <div className="flex items-center justify-center flex-col mt-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-10">Blogs</h1>
      <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, key) => {
          const blogMetadata = NewBlogMetadata(blog);
          return <BlogCard blog={blogMetadata} key={key} />;
        })}
      </div>
    </div>
  );
}
