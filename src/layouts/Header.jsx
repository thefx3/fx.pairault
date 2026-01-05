export default function Header() {
    const base = "text-md rounded-md font-medium px-4 py-2 hover:scale-103 hover:text-[#7eb077] content-center text-center transition-all duration-200";
    const title = "text-lg rounded-md font-medium text-[#7eb077] px-4 py-2 content-center text-center transition-all duration-200";
    const links = [
        { id: "skills", label: "Compétences" },
        { id: "projects", label: "Projets" },
        { id: "about", label: "A propos" },
        { id: "contact", label: "Contact" },
    ];

    const handleScroll = (id) => (event) => {
        event.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
  
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
                    className={base}
                    onClick={handleScroll(link.id)}
                >
                    {link.label}
                </a>
            ))}
        </nav>
    </nav>
    );
}
