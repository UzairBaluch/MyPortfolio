import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Projects from "../Components/Projects";
import { useTheme } from "../contexts/ThemeContext";

const ProjectsPage = () => {
    const { theme } = useTheme();

    const mainStyles = theme === "dark"
        ? "bg-black text-white"
        : "bg-white text-slate-800";
    const linkStyles = theme === "dark"
        ? "border-[#c2c2c2] text-white hover:border-gray-500"
        : "border-slate-400 text-slate-800 hover:border-slate-600";
    const depthEffect = theme === "dark"
        ? "shadow-[inset_4px_4px_12px_rgba(0,0,0,0.7),inset_-4px_-4px_12px_rgba(161,161,170,0.25)] hover:shadow-[inset_3px_3px_9px_rgba(0,0,0,0.75),inset_-3px_-3px_9px_rgba(200,200,210,0.22)]"
        : "shadow-[inset_6px_6px_16px_rgba(148,163,184,0.3),inset_-6px_-6px_16px_rgba(255,255,255,0.95)] hover:shadow-[inset_4px_4px_12px_rgba(148,163,184,0.35),inset_-4px_-4px_12px_rgba(255,255,255,0.9)]";

    return (
        <main className={`min-h-screen mx-auto max-w-3xl ${mainStyles}`}>
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10">
                <Link
                    to="/"
                    className={`inline-flex items-center gap-2 self-start rounded-lg border border-dashed px-3 py-2 text-xs font-semibold transition ml-4 ${linkStyles} ${depthEffect}`}
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to home
                </Link>

                <Projects showViewAll={false} />
            </div>
        </main>
    );
};

export default ProjectsPage;