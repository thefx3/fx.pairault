import { NavLink } from "react-router-dom"

export default function Header() {
    const base = "text-sm rounded-md font-medium hover:text-white hover:bg-black px-4 py-2";
    const active = "bg-black text-white hover:text-neutral-900 transition-all duration-200";
  
    return (
    <nav className="flex flex-row py-2 max-w-5xl mx-auto w-full justify-between ">
        <nav className="py-4 flex flex-row">
            <NavLink to="/" end className={base}>François-Xavier Pairault</NavLink>
        </nav>
        <nav className="py-4 flex gap-6">
        <NavLink to="/skills" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>Compétences</NavLink>
            <NavLink to="/projects" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>Projets</NavLink>
            <NavLink to="/about" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>A propos</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>Contact</NavLink>
        </nav>
    </nav>
    );
}