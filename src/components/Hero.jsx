import { Suspense } from 'react'
import HeroCanvas from './HeroCanvas'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(242,179,61,0.18) 0%, transparent 70%), var(--color-bg)' }}
    >
      {/* Three.js background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>

      {/* Gradient overlay for text legibility */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 75% at 25% 55%, rgba(11, 11, 12, 0.20) 0%, rgba(11, 11, 12, 0.06) 42%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-xl w-full fade-up">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['Designer', 'Developer', 'Web3 Enthusiast', 'Customer Relations Specialist'].map((b) => (
              <span key={b} className="tag-chip">{b}</span>
            ))}
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-[var(--color-text)]">
            Creating<br />
            <span className="gradient-text">Visual</span><br />
            Experiences
          </h1>

          <p className="text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed mb-10 max-w-md">
            Crafting beautiful, interactive web experiences with a focus on design,
            animation, and cutting-edge 3D graphics.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-[var(--color-accent)] hover:opacity-90 text-[var(--color-bg)] transition-all duration-200 glow-indigo"
            >
              View Projects
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm glass hover:bg-white/10 text-[var(--color-text)] transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 scroll-pulse">
        <span className="text-[var(--color-text-muted)] text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[var(--color-accent)] to-transparent" />
      </div>
    </section>
  )
}
