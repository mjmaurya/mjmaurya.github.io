import { motion } from 'motion/react'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { currentRole, hero, stats } from '../data/site'

const isExternal = (href) => /^https?:/.test(href)

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* Soft accent bloom behind the headline. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[62rem] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, var(--glow), transparent 68%)' }}
      />

      <div className="shell relative">
        <motion.div initial="hidden" animate="show">
          <motion.p custom={0} variants={rise} className="eyebrow mb-8">
            {currentRole.role}
            <span aria-hidden className="mx-2 text-line-strong">
              /
            </span>
            <span className="normal-case">{currentRole.company}</span>
          </motion.p>

          <h1 className="max-w-4xl text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.03em] text-fg sm:text-6xl md:text-7xl">
            {hero.headline.map((line, i) => {
              // Split the line around the emphasis word so only that word
              // picks up the serif accent face.
              const at = line.indexOf(hero.emphasis)
              return (
                <motion.span key={line} custom={i + 1} variants={rise} className="block">
                  {at === -1 ? (
                    line
                  ) : (
                    <>
                      {line.slice(0, at)}
                      <em className="font-serif font-normal text-accent italic">{hero.emphasis}</em>
                      {line.slice(at + hero.emphasis.length)}
                    </>
                  )}
                </motion.span>
              )
            })}
          </h1>

          <motion.p
            custom={4}
            variants={rise}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {hero.intro}
          </motion.p>

          <motion.div
            custom={5}
            variants={rise}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href={hero.ctaPrimary.href}
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-88"
            >
              {hero.ctaPrimary.label}
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={hero.ctaSecondary.href}
              {...(isExternal(hero.ctaSecondary.href)
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-fg transition-colors hover:border-line-strong hover:bg-elev"
            >
              {hero.ctaSecondary.label}
              {isExternal(hero.ctaSecondary.href) ? (
                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              ) : (
                <ArrowDown
                  size={15}
                  strokeWidth={2}
                  className="text-muted transition-transform duration-300 group-hover:translate-y-0.5"
                />
              )}
            </a>
          </motion.div>
        </motion.div>

        <motion.dl
          custom={7}
          initial="hidden"
          animate="show"
          variants={rise}
          className="mt-20 grid grid-cols-3 gap-6 border-t border-line pt-8 md:mt-24 md:gap-10"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-mono text-2xl font-medium tracking-tight text-fg tabular-nums md:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1.5 text-xs leading-snug text-subtle md:text-sm">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
