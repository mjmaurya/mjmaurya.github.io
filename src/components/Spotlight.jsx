import { ArrowUpRight } from 'lucide-react'
import { spotlight } from '../data/site'
import Section from './Section'
import Reveal from './Reveal'

export default function Spotlight() {
  return (
    <Section id="codescript" index="001" title="Currently building">
      <div className="overflow-hidden rounded-2xl border border-line bg-elev">
        <div className="grid gap-10 p-6 md:grid-cols-[1.15fr_1fr] md:gap-12 md:p-10">
          <div>
            <Reveal>
              <h3 className="text-3xl font-semibold tracking-[-0.02em] text-fg md:text-4xl">
                {spotlight.name}
              </h3>
              <p className="mt-3 font-serif text-xl leading-snug text-accent italic md:text-2xl">
                {spotlight.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted md:text-base">
                {spotlight.body}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <ul className="mt-7 flex flex-wrap gap-2">
                {spotlight.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.6875rem] text-subtle"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={spotlight.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-88"
                >
                  Open CodeScript
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href={spotlight.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep text-sm text-muted transition-colors hover:text-fg"
                >
                  Source
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-line pt-6">
                {spotlight.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="font-mono text-xl font-medium text-fg tabular-nums">
                      {m.value}
                    </dt>
                    <dd className="mt-1 text-xs leading-snug text-subtle">{m.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* The tool list doubles as the section's visual — no screenshot to go stale. */}
          <Reveal delay={0.1} className="min-w-0">
            <div className="h-full rounded-xl border border-line bg-bg p-5">
              <p className="eyebrow border-b border-line pb-3">In the toolkit</p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {spotlight.tools.map((tool) => (
                  <li key={tool} className="flex items-center gap-2 text-sm text-muted">
                    <span aria-hidden className="size-1 shrink-0 rounded-full bg-accent/70" />
                    <span className="truncate">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
