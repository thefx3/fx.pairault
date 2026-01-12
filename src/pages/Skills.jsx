import { BiLogoNodejs } from "react-icons/bi";
import { BsNodePlusFill } from "react-icons/bs";
import { DiNodejs, DiPostgresql } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { RiNextjsFill, RiNodejsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";


export default function Skills() {

  const sections = [
    {
      title: "Frontend",
      items: [
        { Icon: FaHtml5, label: "HTML5", color: "text-orange-500" },
        { Icon: FaCss3Alt, label: "CSS", color: "text-blue-500" },
        { Icon: FaJs, label: "JavaScript", color: "text-yellow-400" },
        { Icon: FaReact, label: "React.js", color: "text-sky-400" },
        { Icon: RiTailwindCssFill, label: "Tailwind CSS", color: "text-cyan-400" },
        { Icon: RiNextjsFill, label: "Next.js", color: "text-black" },
      ],
    },
    {
      title: "Backend",
      items: [
        { Icon: IoLogoNodejs, label: "Node.js", color: "text-green-600" },
        { Icon: DiPostgresql, label: "PostgreSQL", color: "text-sky-700" },
        { Icon: RiSupabaseFill, label: "Supabase", color: "text-emerald-500" },
        { Icon: SiPrisma, label: "Prisma", color: "text-indigo-500" },
      ],
    },
  ];

  return (
    <div className="space-y-10 text-center">
      <h2 className="text-2xl uppercase tracking-[0.25em] text-white-900">Compétences</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        {sections.map((section) => (
          <div key={section.title} className="rounded-lg border border-[#7eb077] p-6 space-y-3 w-full">
            <h3 className="text-2xl font-semibold text-center">{section.title}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {section.items.map(({ Icon, label, color }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 rounded-lg px-4 py-3 text-sm w-30"
                >
                  <div className="w-18 h-18 rounded-full flex border items-center justify-center bg-white shadow-inner transition-transform duration-200 hover:scale-105 hover:shadow-md">
                    {Icon && <Icon size={40} className={color} />}
                  </div>
                  <span className="dont-medium text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
