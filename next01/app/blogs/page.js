import blogs from "../data/blogs";

export default function Blogs() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Blog list</h1>
      <div className="mt-6 p-4">
        {blogs.map((blog) => (
          <BlogIte title={blog.title} />
        ))}
      </div>
    </div>
  );
}
