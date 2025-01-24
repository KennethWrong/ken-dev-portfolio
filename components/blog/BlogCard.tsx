import Link from "next/link";
import { BlogMetadata } from "./BlogIntro";
import BlogTag from "./BlogTag";

export default function BlogCard({ blog }: { blog: BlogMetadata }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="flex flex-col leading-relaxed group bg-slate-50 items-center rounded-xl p-6 animate-slideUp transform transition-transform duration-300 hover:scale-105"
    >
      <img
        src={blog.thumbnail}
        className="w-full object-contain md:max-h-40 max-h-52 mb-4"
      />
      <div className="flex-col items-center justify-center">
        <BlogTag tag={blog.tag} center={true} />
        <h1 className="text-lg md:text-2xl font-bold mb-2">{blog.title}</h1>
        <p className="text-xs md:text-sm mb-2 line-clamp-2">
          {blog.description}
        </p>
        <p className="text-xs md:text-sm text-gray-500">{`${blog.date} | ${blog.readTime} min read`}</p>
        <p className="text-xs md:text-sm text-gray-500 opacity-0 group-hover:opacity-100 transform transition-all duration-300 ease-in-out">
          Read
          <span className="text-xs md:text-sm ml-3 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2">{`→`}</span>
        </p>
      </div>
    </Link>
  );
}
