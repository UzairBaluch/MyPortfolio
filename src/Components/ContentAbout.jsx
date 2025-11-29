import { useTheme } from "../contexts/ThemeContext";

const AboutContent = () => {
  const { theme } = useTheme();

  const baseText = theme === "dark" ? "text-gray-300" : "text-slate-700";
  const accentText = theme === "dark" ? "text-gray-400" : "text-slate-500";
  const headingText = theme === "dark" ? "text-white" : "text-slate-900";

  return (
    <section className={`w-full max-w-3xl mx-auto p-6 leading-relaxed ${baseText}`}>
      <h2 className={`text-2xl font-bold ${headingText}`}>About</h2>
      <p className="mb-4">
        <span className={`font-mono ${accentText}`}>tldr;</span> professional button presser, amateur napper.
      </p>
      <p className="mb-4">
        I collect random knowledge like Pokémon cards, try to build things that mostly collapse, and
        <span className={`italic ${accentText}`}> blame it on the coffee </span>
        when things explode. Constantly learning, mostly from YouTube tutorials and weird Reddit threads.
      </p>
      <p>
        When I’m not coding, I’m either plotting world domination 🪐, arguing with my plants about sunlight, or searching for snacks I probably shouldn’t eat.
      </p>
    </section>
  );
};

export default AboutContent;
