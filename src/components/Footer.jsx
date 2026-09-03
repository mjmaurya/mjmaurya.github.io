import { person } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col items-center justify-between gap-3 py-8 text-xs text-subtle sm:flex-row">
        <p>
          © {new Date().getFullYear()} {person.name}
        </p>
        <p className="font-mono">
          Built with React, Vite &amp; Tailwind ·{' '}
          <a
            href="https://github.com/mjmaurya/mjmaurya.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="link-sweep transition-colors hover:text-fg"
          >
            source
          </a>
        </p>
      </div>
    </footer>
  )
}
