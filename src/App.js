import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Layout from "./Layout";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import ContactForm from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<ContactForm />} />
          <Route path="*" element={<AboutMe />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
