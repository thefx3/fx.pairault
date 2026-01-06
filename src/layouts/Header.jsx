import { useEffect, useMemo, useState } from "react";

export default function Header() {
    const [activeId, setActiveId] = useState("home");
    const base = "text-md rounded-md font-medium px-4 py-2 hover:scale-103 hover:text-[#7eb077] content-center text-center transition-all duration-200";
    const active = "text-[#7eb077] text-shadow-md";
    const title = "text-lg rounded-md font-medium text-[#7eb077] px-4 py-2 content-center text-center transition-all duration-200";
    const links = useMemo(() => [
        { id: "skills", label: "Compétences" },
        { id: "projects", label: "Projets" },
        { id: "about", label: "A propos" },
        { id: "contact", label: "Contact" },
    ], []);

    const handleScroll = (id) => (event) => {
        event.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        const ids = ["home", ...links.map((link) => link.id)];
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, [links]);
  
    return (
    <nav className="flex flex-row flex-wrap py-1 px-2 max-w-5xl mx-auto w-full justify-between">
        <nav className="py-4 flex flex-row">
            <a href="#home" className={title} onClick={handleScroll("home")}>François-Xavier Pairault</a>
        </nav>
        <nav className="py-4 flex gap-6">
            {links.map(link => (
                <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`${base} ${activeId === link.id ? active : ""}`}
                    onClick={handleScroll(link.id)}
                >
                    {link.label}
                </a>
            ))}
        </nav>
    </nav>
    );
}
