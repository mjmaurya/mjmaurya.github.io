import { motion } from 'motion/react'

/**
 * Fades content up as it scrolls into view.
 *
 * `as` picks the rendered element so this can wrap list items without
 * inserting an illegal <div> between <ul> and <li>. `once` stops it replaying,
 * and the reduced-motion rule in index.css collapses the duration to nothing.
 */
export default function Reveal({ as = 'div', children, delay = 0, y = 16, className = '' }) {
  const Tag = motion[as]

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
