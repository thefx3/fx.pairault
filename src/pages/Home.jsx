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
        <div className="px-2 space-y-20">
            <section id="home" className="flex flex-row flex-wrap gap-16 py-8">
                        <div className="space-y-12 text-left">

                            <div className="space-y-3">
                                <h1 className="text-3xl md:text-4xl font-bold text-white-900 leading-tight">
                                    François-Xavier Pairault
                                </h1>
                                <p className="text-2xl text-white-700 mb-10">Développeur Full Stack</p>

                                <p className="text-xl/10 text-white-600 max-w-xl mb-10">
                                    Je conçois des applications web modernes, performantes et élégantes, du design jusqu’au déploiement.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-8">
                                <a href="#projects" className="px-8 py-4 rounded-full bg-[#7eb077]-900 text-white text-md font-semibold shadow-md border border-[#7eb077] hover:-translate-y-0.5 transition-transform duration-150">
                                    Voir mes projets
                                </a>
                                <a href="#contact" className="px-8 py-4 rounded-full bg-[#7eb077]/90 text-neutral-900 text-md font-semibold shadow-sm border border-white hover:-translate-y-0.5 transition-transform duration-150">
                                    Me contacter
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="button"
                                aria-pressed={flipped}
                                onClick={() => setFlipped((prev) => !prev)}
                                className="w-70 h-70 relative rounded-full focus:outline-none hover:ring-2 transition-transform duration-200 hover:-translate-y-1"
                            >
                                <div className={`flip-card ${flipped ? "flipped" : ""}`}>
                                    <div className="flip-inner">
                                        <div className="flip-face">
                                            <img
                                                src={Fx}
                                                alt="Portrait de François-Xavier Pairault"
                                                className="w-full h-full rounded-full object-cover border-2 border-white shadow-lg"
                                            />
                                        </div>
                                        <div className="flip-face flip-back bg-neutral-900 text-white text-sm border-1 border-[#7eb077] shadow-md">
                                            <div className="flex flex-col items-center gap-2 text-center px-4">
                                                {infos.map((info) => (
                                                    <div key={info.Label} className="flex items-center gap-2 text-lg">
                                                        {info.Icon && <info.Icon size={18} />}
                                                        <span>{info.Label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#7eb077]-200/60 via-transparent to-white-200/60 -z-10 blur-2xl" />
                            </button>
                        </div>
            </section>

            <section id="skills" className="space-y-4 py-16 scroll-mt-24">
                <Skills />
            </section>

            <section id="projects" className="space-y-4 py-16 scroll-mt-24">
                <Projects />
            </section>

            <section id="about" className="space-y-4 py-16 scroll-mt-24">
                <About />
            </section>

            <section id="contact" className="space-y-4 py-16 scroll-mt-24">
                <Contact />
            </section>
        </div>
    );
}
