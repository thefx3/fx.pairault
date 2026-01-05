import { useState } from "react";
import { LocateIcon, MailIcon, PhoneIcon } from "lucide-react";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Skills from "./Skills.jsx";
import Fx from "../images/fx.png";

export default function Home() {
    const infos = [
        { Icon: LocateIcon, Label: "Paris" },
        { Icon: MailIcon, Label: "fx.pairault@yahoo.fr" },
        { Icon: PhoneIcon, Label: "+33 (0) 6 65 14 65 55" },
    ];

    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-2 space-y-16">
            <section id="home" className="flex flex-col items-center text-center gap-8 flex-wrap">
                <div>
                    <div className="text-3xl font-semibold mb-3">François-Xavier Pairault</div>
                    <p className="text-xl mb-2"> Développeur Full Stack</p>
                </div>

                <button
                    type="button"
                    aria-pressed={flipped}
                    onClick={() => setFlipped((prev) => !prev)}
                    className="w-50 h-50 mx-auto focus:outline-none active:ring-2 active:ring-offset-2 focus:ring-neutral-800 rounded-full hover:scale-98 transition-all duration-200"
                >
                    <div className={`flip-card ${flipped ? "flipped" : ""}`}>
                        <div className="flip-inner">
                            <div className="flip-face">
                                <img
                                    src={Fx}
                                    alt="Portrait de François-Xavier Pairault"
                                    className="w-full h-full rounded-full object-cover border border-neutral-200 shadow-sm"
                                />
                            </div>
                            <div className="flip-face flip-back bg-neutral-900 text-white text-sm border border-neutral-200 shadow-sm">
                                <div className="flex flex-col items-center gap-2 text-center px-4">
                                    {infos.map((info) => (
                                        <div key={info.Label} className="flex items-center gap-2">
                                            {info.Icon && <info.Icon size={16} />}
                                            <span>{info.Label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
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
