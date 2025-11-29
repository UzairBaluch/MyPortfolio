import "./App.css";
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
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contributions" element={<ContributionsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
