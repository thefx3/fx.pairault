import { useState } from "react";
import Cards from "../components/Cards.jsx";

export default function Projects() {
  const projects = [
    {
      title: "Tic Tac Toe",
      subtitle: "Little game project using Html, Css and Javascript",
      statut: "termine",
      skills: ["CSS", "HTML", "Javascript"],
      github: "https://github.com/thefx3/tictactoe",
      live: "https://thefx3.github.io/tictactoe/",
    },
    {
      title: "To Do List",
      subtitle: "To Do list web app using Html, Css and Javascript",
      statut: "termine",
      skills: ["CSS", "HTML", "Javascript"],
      github: "https://github.com/thefx3/todolist",
      live: "https://thefx3.github.io/todolist/",
    },
    {
      title: "Weather App",
      subtitle: "Weather App using Html, Css and Javascript and using public API",
      statut: "termine",
      skills: ["CSS", "HTML", "Javascript"],
      github: "https://github.com/thefx3/weather-app",
      live: "https://thefx3.github.io/weather-app/",
    },
    {
      title: "Business Card",
      subtitle: "Business Card Generator using React and Vite",
      statut: "termine",
      skills: ["React", "Vite"],
      github: "https://github.com/thefx3/cv-app",
      live: "https://cv-2ygm7p7e3-fxpairault-1550s-projects.vercel.app/",
    },
    {
        title: "Members Only",
        subtitle: "Project using the authentification with Express and Node.js",
        statut: "termine",
        skills: ["Express", "Node.js"],
        github: "https://github.com/thefx3/members-only",
        live: "",
      },
      {
        title: "File Uploader",
        subtitle: "Project using the Supabase database to upload file",
        statut: "termine",
        skills: ["Express", "Node.js", "Supabase"],
        github: "https://github.com/thefx3/file-uploader",
        live: "",
      },
    {
      title: "Client 1",
      subtitle: "Website for a client for his Studio",
      statut: "en_cours",
      skills: ["React", "Vite"],
      github: "",
      live: "https://www.studioag.fr/",
    },
    {
      title: "French Test Online",
      subtitle: "Project in building designed for a futur client",
      statut: "en_cours",
      skills: ["React", "Vite", "Express", "Node.js", "Supabase"],
      github: "",
      live: "",
    },
    {
      title: "Client 2",
      subtitle: "Website of an app",
      statut: "a_venir",
      skills: ["React", "Vite"],
      github: "",
      live: "",
    },
    {
      title: "Client 3",
      subtitle: "Website of a client for her construction company",
      statut: "a_venir",
      skills: ["React", "Vite"],
      github: "",
      live: "",
    },
  ];

  const tabs = [
    { id: "termine", label: "Terminés" },
    { id: "en_cours", label: "En cours" },
    { id: "a_venir", label: "À venir" },
  ];

  const [activeTab, setActiveTab] = useState("termine");
  const filtered = projects.filter((p) => p.statut === activeTab);

  return (
    <div className="space-y-6 text-center">
      <div className="space-y-2 flex flex-col items-center text-center gap-4">
        <h2 className="text-2xl uppercase tracking-[0.25em] text-white-900">Mes projets</h2>
        <p className="text-lg text-white-600 max-w-2xl mx-auto">
          Sélection de travaux personnels et clients. Chaque projet est livré avec son lien live et son code source.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors cursor-pointer hover:bg-green-800 hover:text-white ${
              activeTab === tab.id
                ? "bg-[#7eb077] text-white border-neutral-900"
                : "bg-white text-neutral-800 border-neutral-200 hover:border-neutral-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project) => (
          <Cards key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
