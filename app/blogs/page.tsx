import BlogCard from "@/components/blog/BlogCard";
import { GetBlogs } from "@/components/blog/BlogComponents";
import Footer from "@/components/Footer";

export default async function Page() {
  const blogs = await GetBlogs();

  return (
    <div>
      <div className="flex items-center justify-center flex-col mt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-10">Blogs</h1>
        <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, key) => {
            return <BlogCard blog={blog} key={key} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
