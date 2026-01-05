export default function Header() {
    const base = "text-sm rounded-md font-medium hover:text-white hover:bg-black px-4 py-2 content-center text-center";
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
    <nav className="flex flex-row flex-wrap py-2 px-2 max-w-5xl mx-auto w-full justify-between">
        <nav className="py-4 flex flex-row">
            <a href="#home" className={base} onClick={handleScroll("home")}>François-Xavier Pairault</a>
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
