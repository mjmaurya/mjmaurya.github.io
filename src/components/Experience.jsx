import { ArrowUpRight } from 'lucide-react'
import { experience } from '../data/site'
import Section from './Section'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <Section id="experience" index="002" title="Experience">
      <ol className="border-t border-line">
        {experience.map((role, i) => (
          <Reveal as="li" key={`${role.company}-${role.role}`} delay={i * 0.06}>
            <article className="grid gap-x-8 gap-y-3 border-b border-line py-8 md:grid-cols-[8rem_1fr] md:px-4">
              <p className="eyebrow whitespace-nowrap md:pt-1.5">
                {role.start} — {role.end}
              </p>

              <div className="min-w-0">
                <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xl font-medium tracking-tight text-fg md:text-2xl">
                  {role.role}
                  {role.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[0.625rem] font-medium tracking-wider text-accent uppercase">
                      <span className="size-1.5 rounded-full bg-live" />
                      Current
                    </span>
                  )}
                </h3>

                <p className="mt-1.5 text-base text-muted">
                  {role.companyUrl ? (
                    <a
                      href={role.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-sweep inline-flex items-center gap-1 text-fg transition-colors hover:text-accent"
                    >
                      {role.company}
                      <ArrowUpRight size={13} strokeWidth={2} />
                    </a>
                  ) : (
                    <span className="text-fg">{role.company}</span>
                  )}
                </p>

                {role.summary && (
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                    {role.summary}
                  </p>
                )}

                {role.highlights?.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {role.highlights.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span
                          aria-hidden
                          className="mt-[0.5em] size-1 shrink-0 rounded-full bg-accent/70"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {role.tech?.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1.5">
                    {role.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.6875rem] text-subtle"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
