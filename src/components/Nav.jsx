import { useState, useEffect } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#career', label: 'Career' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav({ onHireMe, onOpenPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ['home', 'about', 'career', 'projects', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNav(e, '#home')}
          className="shrink-0 font-display text-base font-bold tracking-tight select-none sm:text-xl"
        >
          Kode<span className="gradient-text">-Jo</span>
          <span className="theme-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const id = href.replace('#', '')
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNav(e, href)}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
                    active === id ? 'text-white' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-strong)] transition-all duration-300 ${
                      active === id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => onHireMe?.()}
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/12 px-3 py-2 text-[10px] font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-accent)]/20 sm:px-4 sm:text-sm"
          >
            Hire me
          </button>

          <button
            type="button"
            id="themeToggle"
            aria-label="Toggle day and night mode"
            className="theme-toggle h-9 w-9 shrink-0 sm:h-10 sm:w-10"
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          >
            <span className="theme-icon">{theme === 'light' ? '☀️' : '🌙'}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-[var(--color-text)]"
            aria-label="Toggle menu"
          >
            <span className="flex flex-col items-center gap-1.5">
              <span className={`block h-px w-4 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-px w-4 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-4 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="glass border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              onHireMe?.()
              setMenuOpen(false)
            }}
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-4 py-2 text-sm font-medium text-[var(--color-text)] transition hover:bg-[var(--color-accent)]/20"
          >
            Hire me
          </button>
        </div>
      </div>
    </nav>
  )
}
