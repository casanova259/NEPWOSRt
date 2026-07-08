import { site } from "@/config/site";
import { Reveal, SectionHeader } from "./reveal";
import { ArrowUpRight, GitHubIcon } from "./icons";

export function Projects() {
  if (!site.projects.length) return null;

  return (
    <section className="mx-auto w-full max-w-content px-6 py-16">
      <SectionHeader id="projects" index="03" title="things I've built" />

      <div className="grid gap-4">
        {site.projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <article
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/50 backdrop-blur-sm ${p.featured ? "bg-accent/[0.04]" : "bg-surface/30"
                }`}
            >
              {p.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-accent/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                  featured
                </span>
              )}

              <div className="flex items-baseline gap-3">
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <span className="font-mono text-xs text-faint">{p.year}</span>
              </div>

              <p className="mt-2 text-muted">{p.blurb}</p>
              {p.story && (
                <div className="mt-2 text-sm leading-relaxed text-faint space-y-2">
                  {p.story.split("\n\n").map((para, idx) => {
                    const isItalic = para.startsWith("*") && para.endsWith("*");
                    const content = isItalic ? para.slice(1, -1) : para;
                    return (
                      <p key={idx} className={isItalic ? "italic text-muted/80" : ""}>
                        {content}
                      </p>
                    );
                  })}
                </div>
              )}


              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border bg-bg/40 px-2 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4 text-sm">
                {p.links.live && (
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-fg transition-colors hover:text-accent"
                  >
                    live <ArrowUpRight />
                  </a>
                )}
                {p.links.source && (
                  <a
                    href={p.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
                  >
                    <GitHubIcon className="h-4 w-4" /> source
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}