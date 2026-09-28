import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Career from './components/Career'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function LegalPage({ title, intro, content, onBack }) {
  return (
    <div className="min-h-[100dvh] bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <button
          type="button"
          onClick={onBack}
          className="mb-8 inline-flex items-center rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-panel)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition hover:bg-[var(--color-accent)]/10"
        >
          ← Back to site
        </button>

        <div className="glass rounded-3xl p-8 sm:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">Legal</p>
          <h1 className="font-display text-4xl font-bold tracking-tight">{title}</h1>
          <p className="mt-4 max-w-2xl text-base text-[var(--color-text-secondary)]">{intro}</p>

          <div className="mt-8 space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
            {content.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-2 font-display text-xl font-semibold text-[var(--color-text)]">{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function NotFoundPage({ onBack }) {
  const [mouseTrail, setMouseTrail] = useState([])

  useEffect(() => {
    const handleMove = (event) => {
      const freshOrb = {
        id: Date.now() + Math.random(),
        x: event.clientX,
        y: event.clientY,
        size: 120 + Math.random() * 140,
        opacity: 0.14 + Math.random() * 0.22,
      }

      setMouseTrail((prev) => [...prev, freshOrb].slice(-12))
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  const flickers = Array.from({ length: 18 }, (_, index) => ({
    id: index,
    left: `${(index * 13) % 100}%`,
    top: `${(index * 17) % 100}%`,
    opacity: 0.16 + ((index * 7) % 58) / 100,
    duration: `${1.2 + (index % 6) * 0.45}s`,
    delay: `${(index % 5) * 0.25}s`,
  }))

  return (
    <div className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[var(--color-bg)] px-6 text-center text-[var(--color-text)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(242,179,61,0.18),_transparent_55%)]" />

      <div className="pointer-events-none absolute inset-0 z-10">
        {mouseTrail.map((orb) => (
          <span
            key={orb.id}
            className="absolute rounded-full bg-[var(--color-accent)]/40 blur-2xl"
            style={{
              left: orb.x,
              top: orb.y,
              width: orb.size,
              height: orb.size,
              opacity: orb.opacity,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {flickers.map((flicker) => (
        <span
          key={flicker.id}
          className="absolute block rounded-full bg-[var(--color-accent)]/80 blur-xl"
          style={{
            left: flicker.left,
            top: flicker.top,
            width: 90 + (flicker.id % 6) * 18,
            height: 90 + (flicker.id % 6) * 18,
            opacity: flicker.opacity,
            animation: `flicker404 ${flicker.duration} ease-in-out ${flicker.delay} infinite alternate`,
          }}
        />
      ))}

      <div className="relative z-20 max-w-xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-[var(--color-accent)]">404 error</p>
        <h1 className="font-display text-6xl font-black tracking-tight sm:text-7xl md:text-8xl">404</h1>
        <p className="mt-4 text-base text-[var(--color-text-secondary)] sm:text-lg">
          This page drifted off the grid. Let’s get you back to the portfolio.
        </p>
        <button
          type="button"
          onClick={onBack}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] transition hover:opacity-90"
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

function HireMeModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    companyName: '',
    description: '',
    projectType: {
      newWebsite: false,
      websiteRedesign: false,
      eCommerce: false,
      logoDesign: false,
      customApp: false,
    },
    audience: '',
    goals: '',
    pages: '',
    inspiration: '',
    budget: '',
    deadline: '',
  })

  if (!isOpen) return null

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const toggleProjectType = (key) => {
    setForm((prev) => ({
      ...prev,
      projectType: {
        ...prev.projectType,
        [key]: !prev.projectType[key],
      },
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const selectedTypes = Object.entries(form.projectType)
      .filter(([, checked]) => checked)
      .map(([key]) => key)
      .join(', ')

    const payload = new FormData(e.currentTarget)
    payload.set('form-name', 'projectBriefForm')
    payload.set('projectTypes', selectedTypes)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(payload).toString(),
      })

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setForm({
          companyName: '',
          description: '',
          projectType: {
            newWebsite: false,
            websiteRedesign: false,
            eCommerce: false,
            logoDesign: false,
            customApp: false,
          },
          audience: '',
          goals: '',
          pages: '',
          inspiration: '',
          budget: '',
          deadline: '',
        })
        onClose()
      }, 1200)
    } catch {
      setSubmitted(false)
      alert('There was a problem sending your brief. Please try again.')
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-[var(--color-bg-secondary)] p-5 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-[var(--color-text)] transition hover:bg-white/10"
          aria-label="Close project brief form"
        >
          ×
        </button>

        <div className="mb-6 pr-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">Project Brief Form</p>
          <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">WEB DESIGN PROJECT BRIEF FORM</h2>
        </div>

        <form
          name="projectBriefForm"
          method="POST"
          action="/"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="space-y-5 text-sm text-[var(--color-text-secondary)]"
        >
          <input type="hidden" name="form-name" value="projectBriefForm" />

          <div>
            <label htmlFor="companyName" className="mb-2 block font-medium text-[var(--color-text)]">1. Company Name</label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              value={form.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
              placeholder="Your Answer"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="mb-2 block font-medium text-[var(--color-text)]">2. Brief Description of Your Business</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={form.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
              placeholder="What do you do and what is your goal?"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-[var(--color-text)]">3. Project Type</label>
            <div className="grid gap-2 sm:grid-cols-3">
              {[
                ['newWebsite', 'New Website'],
                ['websiteRedesign', 'Website Redesign'],
                ['eCommerce', 'E-commerce Store'],
                ['logoDesign', 'Logo, Graphics & Branding'],
                ['customApp', 'Custom Application'],
              ].map(([key, label]) => (
                <label key={key} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[var(--color-text)]">
                  <input
                    type="checkbox"
                    name={key}
                    checked={form.projectType[key]}
                    onChange={() => toggleProjectType(key)}
                    className="h-4 w-4 accent-[var(--color-accent)]"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="audience" className="mb-2 block font-medium text-[var(--color-text)]">4. Who is your target audience?</label>
            <textarea
              id="audience"
              name="audience"
              rows="3"
              value={form.audience}
              onChange={(e) => handleChange('audience', e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
              placeholder="Describe your ideal customer"
              required
            />
          </div>

          <div>
            <label htmlFor="goals" className="mb-2 block font-medium text-[var(--color-text)]">5. What are the main goals of the website?</label>
            <textarea
              id="goals"
              name="goals"
              rows="3"
              value={form.goals}
              onChange={(e) => handleChange('goals', e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
              placeholder="e.g., get more phone calls, sell products online"
              required
            />
          </div>

          <div>
            <label htmlFor="pages" className="mb-2 block font-medium text-[var(--color-text)]">6. What key pages or features do you need?</label>
            <textarea
              id="pages"
              name="pages"
              rows="3"
              value={form.pages}
              onChange={(e) => handleChange('pages', e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
              placeholder="e.g., Home, About, Contact, Blog, Online Booking"
              required
            />
          </div>

          <div>
            <label htmlFor="inspiration" className="mb-2 block font-medium text-[var(--color-text)]">7. Do you have examples of websites you like?</label>
            <textarea
              id="inspiration"
              name="inspiration"
              rows="3"
              value={form.inspiration}
              onChange={(e) => handleChange('inspiration', e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
              placeholder="Paste links and state what you like about them"
              required
            />
          </div>

          <div>
            <label htmlFor="budget" className="mb-2 block font-medium text-[var(--color-text)]">8. What is your estimated budget?</label>
            <input
              id="budget"
              name="budget"
              type="text"
              value={form.budget}
              onChange={(e) => handleChange('budget', e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
              placeholder="e.g., $500 - $3,000"
              required
            />
          </div>

          <div>
            <label htmlFor="deadline" className="mb-2 block font-medium text-[var(--color-text)]">9. When do you need the project completed?</label>
            <input
              id="deadline"
              name="deadline"
              type="text"
              value={form.deadline}
              onChange={(e) => handleChange('deadline', e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
              placeholder="Target launch date"
              required
            />
          </div>

          <div className="flex items-center justify-end pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] transition hover:opacity-90"
            >
              {submitted ? 'Submitted' : 'Submit Brief'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function App() {
  const [view, setView] = useState('home')
  const [hireOpen, setHireOpen] = useState(false)

  useEffect(() => {
    const syncRoute = () => {
      const path = window.location.pathname.replace(/\/$/, '') || '/'
      const routeMap = {
        '/': 'home',
        '/home': 'home',
        '/terms': 'terms',
        '/privacy': 'privacy',
      }

      setView(routeMap[path] || '404')
    }

    syncRoute()
    window.addEventListener('popstate', syncRoute)
    return () => window.removeEventListener('popstate', syncRoute)
  }, [])

  const navigate = (nextView) => {
    const routes = {
      home: '/',
      terms: '/terms',
      privacy: '/privacy',
      '404': '/404',
    }

    const path = routes[nextView] || '/'
    window.history.pushState({}, '', path)
    setView(nextView)
  }

  if (view === 'terms') {
    return (
      <LegalPage
        title="Terms of Service"
        intro="These terms explain the relationship between Kode-Jo and anyone using this website or engaging my services."
        content={[
          {
            heading: '1. Service Scope',
            body: 'Kode-Jo provides design, branding, UX/UI, web development, and digital experience services. Scope, deliverables, timelines, and fees are defined in the project proposal or brief agreed upon before work begins.',
          },
          {
            heading: '2. Client Responsibilities',
            body: 'Clients are responsible for providing accurate content, feedback, approvals, and timely responses throughout the project lifecycle. Delayed feedback may affect the delivery timeline.',
          },
          {
            heading: '3. Payment Terms',
            body: 'Projects are billed according to the agreed proposal. Work may be paused or withheld if payment terms have not been fulfilled in line with the agreement.',
          },
          {
            heading: '4. Intellectual Property',
            body: 'Final approved work belongs to the client once full payment has been received, unless otherwise agreed in writing. Kode-Jo may retain rights to general methods, process, and portfolio samples.',
          },
          {
            heading: '5. Limitation of Liability',
            body: 'Kode-Jo is not liable for indirect, incidental, or consequential damages arising from the use of the website or services, except as required by applicable law.',
          },
        ]}
        onBack={() => navigate('home')}
      />
    )
  }

  if (view === 'privacy') {
    return (
      <LegalPage
        title="Privacy Policy"
        intro="This Privacy Policy explains how information is collected, used, and protected when you visit this website or contact me."
        content={[
          {
            heading: '1. Information We Collect',
            body: 'We may collect personal information you provide directly, such as your name, email address, project details, and any other information included in a form submission or enquiry.',
          },
          {
            heading: '2. How We Use Information',
            body: 'Your information is used to respond to enquiries, discuss project requirements, provide quotes, and improve communication and service delivery.',
          },
          {
            heading: '3. Cookies and Analytics',
            body: 'This site may use basic analytics or cookies to understand user interaction and improve the experience. You may disable cookies in your browser if preferred.',
          },
          {
            heading: '4. Sharing of Information',
            body: 'We do not sell personal data. Information may be shared with trusted service providers only when necessary to deliver the service or maintain the website.',
          },
          {
            heading: '5. Security',
            body: 'Reasonable technical and organizational safeguards are used to protect personal information; however, no system is completely risk-free.',
          },
        ]}
        onBack={() => navigate('home')}
      />
    )
  }

  if (view === '404') {
    return <NotFoundPage onBack={() => navigate('home')} />
  }

  return (
    <div className="noise">
      <Nav onHireMe={() => setHireOpen(true)} onOpenPage={navigate} />
      <main>
        <Hero />
        <About />
        <Career />
        <Projects />
        <Contact />
      </main>
      <Footer onOpenPage={navigate} />
      <HireMeModal isOpen={hireOpen} onClose={() => setHireOpen(false)} />
    </div>
  )
}
