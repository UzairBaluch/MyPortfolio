import { useParams, Link } from "react-router-dom";
import { findBlogBySlug } from "../data/Blogs";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = findBlogBySlug(slug);
  const { theme } = useTheme();

  const mainStyles = theme === "dark" ? "bg-black text-white" : "bg-white text-slate-800";

  if (!blog) {
    return (
      <main className={`min-h-screen max-w-3xl mx-auto py-10 px-6 ${mainStyles}`}>
        <p>Blog not found.</p>
        <Link 
          to="/blogs" 
          className="inline-flex items-center gap-2 border border-dashed px-3 py-2 text-xs font-semibold rounded-lg mt-4"
        >
          <ArrowUpRight className="w-4 h-4 rotate-180" />
          Back to all blogs
        </Link>
      </main>
    );
  }

  return (
    <main className={`min-h-screen max-w-3xl mx-auto py-10 px-6 ${mainStyles}`}>
      <Link 
        to="/blogs" 
        className="inline-flex items-center gap-2 border border-dashed px-3 py-2 text-xs font-semibold rounded-lg mb-6"
      >
        <ArrowUpRight className="w-4 h-4 rotate-180" />
        Back to all blogs
      </Link>

      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{blog.readTime} • {blog.type} • {blog.date}</p>
      <div className="prose max-w-none text-sm whitespace-pre-line">
        {blog.content ?? blog.description}
      </div>
    </main>
  );
}