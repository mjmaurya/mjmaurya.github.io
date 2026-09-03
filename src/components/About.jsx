import { about, person } from '../data/site'
import Section from './Section'
import Reveal from './Reveal'

export default function About() {
  return (
    <Section id="about" index="004" title="About">
      <div className="grid gap-12 md:grid-cols-[1fr_18rem] md:gap-16">
        <div>
          <Reveal>
            <h3 className="max-w-xl font-serif text-3xl leading-[1.15] tracking-tight text-fg md:text-[2.6rem]">
              {about.heading}
            </h3>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-7 max-w-xl space-y-4">
              {about.body.map((p) => (
                <p key={p} className="text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {about.principles.map((item, i) => (
              <Reveal key={item.title} delay={0.05 * i}>
                <div className="h-full bg-bg p-5 transition-colors hover:bg-elev">
                  <dt className="text-sm font-medium tracking-tight text-fg">{item.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">{item.body}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal delay={0.12} className="md:pt-2">
          <figure className="md:sticky md:top-28">
            <img
              src={person.avatar}
              alt={person.name}
              width="288"
              height="288"
              loading="lazy"
              decoding="async"
              className="aspect-square w-44 rounded-2xl border border-line object-cover grayscale transition-all duration-500 hover:grayscale-0 md:w-full"
            />
            <figcaption className="mt-4 space-y-1">
              <p className="text-sm font-medium text-fg">{person.name}</p>
              <p className="text-sm text-subtle">{person.role}</p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  )
}
