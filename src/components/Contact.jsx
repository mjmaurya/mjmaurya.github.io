import { ArrowUpRight, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { contact, person, socials } from '../data/site'
import Reveal from './Reveal'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked — the mailto link beside this still works.
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 left-1/2 h-[30rem] w-[52rem] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, var(--glow), transparent 70%)' }}
      />

      <div className="shell relative py-24 md:py-32">
        {person.available && (
          <Reveal>
            <p className="mb-7 flex items-center gap-2.5">
              <span className="relative grid size-2 place-items-center">
                <span className="absolute size-2 rounded-full bg-live pulse-ring" />
                <span className="size-2 rounded-full bg-live" />
              </span>
              <span className="eyebrow">{person.availableLabel}</span>
            </p>
          </Reveal>
        )}

        <Reveal delay={0.04}>
          <h2 className="max-w-2xl text-4xl leading-[1.08] font-semibold tracking-[-0.03em] text-fg md:text-6xl">
            {contact.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{contact.body}</p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-88"
            >
              {person.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg"
            >
              {copied ? <Check size={14} strokeWidth={2} /> : <Copy size={14} strokeWidth={2} />}
              <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center justify-between gap-4 bg-bg p-5 transition-colors hover:bg-elev"
                >
                  <span>
                    <span className="block text-sm font-medium text-fg">{s.name}</span>
                    <span className="mt-0.5 block font-mono text-xs text-subtle">{s.handle}</span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                    className="shrink-0 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
