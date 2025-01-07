import { GetBlogs } from "./BlogComponents";
import Link from "next/link";
import BlogCard from "./BlogCard";
import { BlogMetadata } from "./BlogIntro";

export default async function RecentBlogs() {
  let blogs: BlogMetadata[] = await GetBlogs();

  blogs = blogs.sort((a, b) => b.slug - a.slug);

  return (
    <div className="flex flex-col items-start text-center mb-2 w-full">
      <div className="flex flex-row w-full justify-between mb-6">
        <h1
          className={`text-xl md:text-4xl text-black font-bold leading-relaxed`}
        >
          Recent Blogs
          <span className="text-2xs md:text-xs text-gray-500 ml-2 hover:cursor-pointer hover:text-gray-400">
            <Link href="/blogs/">{" View All"}</Link>
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        {blogs.slice(0, 2).map((blog, key) => {
          return <BlogCard blog={blog} key={key} />;
        })}
      </div>
    </div>
  );
}
