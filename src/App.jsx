//app.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import './App.css'
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Skills from "./pages/Skills.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

function App() {

  return (
    
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} /> 
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    
  )
}

export default App
