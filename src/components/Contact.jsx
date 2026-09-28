import { useState } from 'react'

const services = [
  { value: '', label: 'Select a service', disabled: true },
  { value: 'Mobile Dev', label: 'Mobile Dev' },
  { value: 'Web Dev', label: 'Web Dev' },
  { value: 'Graphic Design', label: 'Graphic Design' },
  { value: 'UX/UI', label: 'UX/UI' },
  { value: 'Micro animation/Motion', label: 'Micro animation/Motion' },
  { value: '3D design', label: '3D design' },
  { value: 'Other', label: 'Other' },
]

const contacts = [
  {
    icon: '/assets/icons/gmail-icon.svg',
    label: 'Email',
    display: 'kojoahyiaosae@gmail.com\nkj10dev@gmail.com',
    href: 'mailto:kojoahyiaosae@gmail.com',
  },
  {
    icon: '/assets/icons/linkedin-icon-2.svg',
    label: 'LinkedIn',
    display: 'linkedin.com/in/kojo-ahyia-osae',
    href: 'https://linkedin.com/in/kojo-ahyia-osae',
  },
  {
    icon: '/assets/icons/github-icon-1.svg',
    label: 'GitHub',
    display: 'github.com/kj10dev',
    href: 'https://github.com/kj10dev',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contactForm', ...form }).toString(),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/60 form-field transition-all duration-200 focus:bg-white/8'

  return (
    <section id="contact" className="py-32 relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(79,70,229,0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-white/30 text-sm font-medium tracking-widest mb-3">REACH OUT</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-white/40 text-lg mt-2">Let's create something amazing together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form
            name="contactForm"
            method="POST"
            action="/"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input type="hidden" name="form-name" value="contactForm" />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs text-white/40 font-medium mb-1.5">Name</label>
                <input
                  id="name" name="name" type="text" required
                  className={inputClass} placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-white/40 font-medium mb-1.5">Email</label>
                <input
                  id="email" name="email" type="email" required
                  className={inputClass} placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-xs text-white/40 font-medium mb-1.5">Service</label>
              <select
                id="service" name="service" required
                className={`${inputClass} appearance-none cursor-pointer`}
                value={form.service}
                onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
              >
                {services.map(({ value, label, disabled }) => (
                  <option
                    key={value || '__empty'}
                    value={value}
                    disabled={disabled}
                    style={{ background: '#0a0a1f' }}
                  >
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs text-white/40 font-medium mb-1.5">Message</label>
              <textarea
                id="message" name="message" rows={6} required
                className={inputClass} placeholder="Tell me about your project…"
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3.5 rounded-xl text-sm font-semibold bg-[var(--color-accent)] hover:bg-[var(--color-accent)] disabled:opacity-50 text-white transition-all duration-200 glow-indigo"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'sent' && (
              <p className="text-cyan-400 text-sm text-center">Thank you — your message has been sent.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
            )}
          </form>

          {/* Contact links */}
          <div className="flex flex-col gap-4 justify-start">
            {contacts.map(({ icon, label, display, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 flex gap-4 items-center hover:bg-white/8 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors duration-200">
                  <img src={icon} alt={label} className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <p className="text-xs text-white/30 font-medium">{label}</p>
                  <p className="text-white/75 text-sm mt-0.5 whitespace-pre-line">{display}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
