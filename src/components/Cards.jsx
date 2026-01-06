export default function Cards({ title, subtitle, skills = [], github, live }) {
  return (
    <div className="rounded-2xl border bg-white/90 backdrop-blur-sm p-5 shadow-sm hover:shadow-md transition-shadow duration-150 h-full flex flex-col gap-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <p className="text-sm text-neutral-600">{subtitle}</p>
      </div>

      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1 rounded-full border border-neutral-200 bg-white text-neutral-700"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex gap-3 text-sm">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded-lg bg-neutral-900 text-white font-semibold shadow-sm hover:-translate-y-0.5 transition-transform duration-150 cursor-pointer"
          >
            Live
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded-lg bg-white text-neutral-900 font-semibold border border-neutral-200 shadow-sm hover:-translate-y-0.5 transition-transform duration-150 cursor-pointer"
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
}
