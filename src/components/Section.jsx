import Reveal from './Reveal'

/** A numbered section with a hairline rule — the page's structural unit. */
export default function Section({ id, index, title, children, className = '' }) {
  return (
    <section id={id} className={`shell scroll-mt-24 py-20 md:py-28 ${className}`}>
      <Reveal>
        <div className="mb-10 flex items-baseline gap-4 border-b border-line pb-4 md:mb-14">
          <span className="eyebrow tabular-nums">{index}</span>
          <h2 className="eyebrow !text-fg">{title}</h2>
        </div>
      </Reveal>
      {children}
    </section>
  )
}
