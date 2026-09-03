import { ArrowUpRight, Star } from 'lucide-react'
import { projects } from '../data/site'
import Section from './Section'
import Reveal from './Reveal'

export default function Work() {
  return (
    <Section id="work" index="003" title="Selected work">
      <ul className="border-t border-line">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 0.06}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-x-8 gap-y-3 border-b border-line py-7 transition-colors hover:bg-elev md:grid-cols-[5.5rem_1fr_auto] md:items-baseline md:px-4 md:py-8"
            >
              <span className="eyebrow md:pt-1.5">{p.year}</span>

              <div className="min-w-0">
                <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-medium tracking-tight text-fg transition-colors group-hover:text-accent md:text-2xl">
                  {p.name}
                  {p.featured && (
                    <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[0.625rem] font-medium tracking-wider text-accent uppercase">
                      Maintained
                    </span>
                  )}
                  {p.stars ? (
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-normal text-subtle">
                      <Star size={11} strokeWidth={2} />
                      {p.stars}
                    </span>
                  ) : null}
                </h3>

                <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted">{p.summary}</p>

                <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.6875rem] text-subtle"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-subtle transition-colors group-hover:text-accent md:pt-1.5">
                {p.hrefLabel}
                <ArrowUpRight
                  size={14}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <a
          href="https://github.com/mjmaurya?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="link-sweep mt-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
        >
          Browse all repositories
          <ArrowUpRight size={14} strokeWidth={2} />
        </a>
      </Reveal>
    </Section>
  )
}
