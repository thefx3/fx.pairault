export default function Cards({ title, subtitle, skills = [], github, live, statut }) {
  const isDisabled = statut === "a_venir";
  const showLive = live !== undefined || isDisabled;
  const showGithub = github !== undefined || isDisabled;
  const disableLive = isDisabled || !live;
  const disableGithub = isDisabled || !github;

  return (
    <div className="rounded-2xl border bg-white/90 backdrop-blur-sm p-5 shadow-sm hover:shadow-md transition-shadow duration-150 h-full flex flex-col gap-4">
      <div className="space-y-2 text-center">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <p className="text-sm text-neutral-600">{subtitle}</p>
      </div>

      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center">
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

      <div className="mt-auto flex gap-3 text-sm justify-center">
        {showLive && (
          <a
            href={live || "#"}
            target={live ? "_blank" : undefined}
            rel={live ? "noreferrer" : undefined}
            aria-disabled={disableLive}
            tabIndex={disableLive ? -1 : 0}
            className={`px-3 py-2 rounded-lg font-semibold border shadow-sm cursor-pointer transition-transform duration-150 ${
              disableLive
                ? "bg-neutral-200 text-neutral-500 border-neutral-200 pointer-events-none"
                : "bg-neutral-900 text-white border-neutral-900 hover:-translate-y-0.5"
            }`}
          >
            Live
          </a>
        )}
        {showGithub && (
          <a
            href={github || "#"}
            target={github ? "_blank" : undefined}
            rel={github ? "noreferrer" : undefined}
            aria-disabled={disableGithub}
            tabIndex={disableGithub ? -1 : 0}
            className={`px-3 py-2 rounded-lg font-semibold border shadow-sm cursor-pointer transition-transform duration-150 ${
              disableGithub
                ? "bg-neutral-200 text-neutral-500 border-neutral-200 pointer-events-none"
                : "bg-white text-neutral-900 border-neutral-200 hover:-translate-y-0.5"
            }`}
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
}
