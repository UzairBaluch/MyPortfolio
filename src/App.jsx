import "./App.css";
import { useState, useEffect } from 'react';
import { useTheme } from "./contexts/ThemeContext"; // Add this import
import AboutMe from "./Components/AboutMe";
import AboutContent from "./Components/ContentAbout";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import BottomBlur from "./Components/BottomBlur";
import Contributions from "./Components/Contributions";
import { Routes, Route } from "react-router-dom";
import ContributionsPage from "./Pages/ContributionsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import BottomDockMode from "./Components/BottomDockMode";
import ContactForm from "./Components/ContactForm";

const HomePage = () => {
  return (
    <div>
      <main className="min-h-screen max-w-3xl mx-auto flex items-center flex-col py-5">
        <AboutMe />
        <AboutContent />
        <Skills />
        <Projects limit={2} showViewAll={true} />
        <Contributions limit={2} showViewAll={true} />
        <BottomDockMode />
        <ContactForm />
        <Footer />
      </main>
      <BottomBlur />
    </div>
  );
};

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { theme } = useTheme(); // Get theme from context
  const isDark = theme === "dark";

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Full-page spotlight overlay - adjusted for dark mode */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, 
            ${isDark 
              ? 'rgba(99, 102, 241, 0.1)' // Much brighter in dark mode
              : 'rgba(99, 102, 241, 0.10)' // Subtle in light mode
            }, 
            transparent 40%)`
        }}
      />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contributions" element={<ContributionsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;