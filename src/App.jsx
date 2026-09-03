import { MotionConfig } from 'motion/react'

import Header from './components/Header'
import Hero from './components/Hero'
import Spotlight from './components/Spotlight'
import Experience from './components/Experience'
import Work from './components/Work'
import About from './components/About'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    // reducedMotion="user" makes Motion honour the OS setting — the CSS rule in
    // index.css cannot reach JS-driven inline animations on its own.
    <MotionConfig reducedMotion="user">
      <div className="grain min-h-screen bg-bg">
        <a
          href="#codescript"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
        >
          Skip to content
        </a>
        <Header />
        <main>
          <Hero />
          <Spotlight />
          <Experience />
          <Work />
          <About />
          <Stack />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
