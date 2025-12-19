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
  
  // Add these styling variables from Projects component
  const viewAllLink = theme === "dark" ? "border-[#c2c2c2] hover:border-gray-500 text-white" : "border-slate-400 hover:border-slate-500 text-slate-800";
  const depthEffect = theme === "dark"
    ? "shadow-[inset_4px_4px_12px_rgba(0,0,0,0.7),inset_-4px_-4px_12px_rgba(161,161,170,0.25)] hover:shadow-[inset_3px_3px_9px_rgba(0,0,0,0.75),inset_-3px_-3px_9px_rgba(200,200,210,0.22)]"
    : "shadow-[inset_6px_6px_16px_rgba(148,163,184,0.3),inset_-6px_-6px_16px_rgba(255,255,255,0.95)] hover:shadow-[inset_4px_4px_12px_rgba(148,163,184,0.35),inset_-4px_-4px_12px_rgba(255,255,255,0.9)]";

  return (
    <section className="py-5 w-full max-w-3xl mx-auto px-6">
      {isOnBlogsPage && (
        <Link
          to="/"
          className={`inline-flex items-center gap-2 border border-dashed px-3 py-2 text-xs font-semibold rounded-lg mb-6 transition ${viewAllLink} ${depthEffect}`}
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
            className={`inline-flex items-center gap-2 border border-dashed px-3 py-2 text-xs font-semibold rounded-lg transition ${viewAllLink} ${depthEffect}`}
          >
            Read all blogs
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </section>
  );
}