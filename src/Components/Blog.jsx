import { Link, useLocation } from "react-router-dom";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { blogs } from "../data/Blogs";
import { useTheme } from "../contexts/ThemeContext";

export default function Blog() {
  const { theme } = useTheme();
  const location = useLocation();
  const isOnBlogsPage = location.pathname === "/blogs";
  const visible = isOnBlogsPage ? blogs : blogs.slice(0, 2);

  const headingColor = theme === "dark" ? "text-white" : "text-slate-900";
  const titleColor = theme === "dark" ? "text-white" : "text-slate-900";
  const descColor = theme === "dark" ? "text-gray-400" : "text-slate-600";
  const dateColor = theme === "dark" ? "text-gray-500" : "text-slate-500";

  return (
    <section className="py-5 w-full max-w-3xl mx-auto px-6">
      {isOnBlogsPage && (
        <Link
          to="/"
          className="inline-flex items-center gap-2 border border-dashed px-3 py-2 text-xs font-semibold rounded-lg mb-6"
        >
          <ArrowUpRight className="w-4 h-4 rotate-180" />
          Back to home
        </Link>
      )}

      <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
        {isOnBlogsPage ? "All Blogs & Gists" : "Blogs & Gists"}
      </h2>

      <div className="space-y-6">
        {visible.map((blog) => (
          <Link
            key={blog.slug}
            to={`/blogs/${blog.slug}`}
            className="flex items-start gap-x-6 group cursor-pointer hover:opacity-95"
          >
            <div className="flex-1">
              <h3 className={`font-semibold flex items-center gap-2 text-lg ${titleColor}`}>
                {blog.title}
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
              </h3>
              <p className={`text-xs mt-1 ${descColor}`}>{blog.description}</p>
            </div>

            <span className={`text-sm flex-shrink-0 ${dateColor}`}>{blog.date}</span>
          </Link>
        ))}
      </div>

      {!isOnBlogsPage && blogs.length > visible.length && (
        <div className="mt-6 flex justify-end">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 border border-dashed px-3 py-2 text-xs font-semibold rounded-lg"
          >
            Read all blogs
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </section>
  );
}