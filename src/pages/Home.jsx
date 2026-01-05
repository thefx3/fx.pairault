import { LocateIcon, MailIcon, PhoneIcon } from "lucide-react";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Skills from "./Skills.jsx";

export default function Home() {
    const infos = [
        { Icon: LocateIcon, Label: "Paris" },
        { Icon: MailIcon, Label: "fx.pairault@yahoo.fr" },
        { Icon: PhoneIcon, Label: "+33 (0) 6 65 14 65 55" },
    ];

    return (
        <div className="px-2 space-y-16">
            <section id="home" className="space-y-4">
                <div className="text-2xl font-semibold">François-Xavier Pairault</div>
                <p>Développeur Full Stack</p>

                <div className="infos space-y-2">
                    {infos.map(info => (
                        <div key={info.Label} className="info flex items-center gap-3">
                            <div className="icon text-neutral-600">
                                {info.Icon && <info.Icon size={18} className="sidebar-icon" />}
                            </div>
                            <span>{info.Label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section id="skills" className="space-y-4">
                <Skills />
            </section>

            <section id="projects" className="space-y-4">
                <Projects />
            </section>

            <section id="about" className="space-y-4">
                <About />
            </section>

            <section id="contact" className="space-y-4">
                <Contact />
            </section>
        </div>
    );
}
