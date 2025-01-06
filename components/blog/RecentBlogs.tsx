import { GetBlogs } from "@/app/blogs/page";
import { Button } from "../ui/button";
import Link from "next/link";
import BlogCard from "./BlogCard";

export default async function RecentBlogs() {
  let blogs: any[] = await GetBlogs();

  blogs = blogs.sort((a, b) => b.slug - a.slug);

  return (
    <div className="flex flex-col items-start text-center mb-2 w-full p-6">
      <div className="flex flex-row w-full justify-between mb-6">
        <h1 className="font-bold text-3xl text-center lg:text-left lg:self-start justify-center">
          {" "}
          Recent Blogs
          <span className="text-xs text-gray-500 ml-2 hover:cursor-pointer hover:text-gray-400">
            <Link href="/blogs/">{" View All"}</Link>
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {blogs.slice(0, 3).map((blog, key) => {
          return <BlogCard blog={blog} key={key} />;
        })}
      </div>
    </div>
  );
}
