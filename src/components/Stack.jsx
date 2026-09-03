import { stack } from '../data/site'
import Section from './Section'
import Reveal from './Reveal'

export default function Stack() {
  return (
    <Section id="stack" index="005" title="Stack">
      <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.05}>
            <div>
              <h3 className="eyebrow border-b border-line pb-3">{group.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-elev px-3 py-1.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
