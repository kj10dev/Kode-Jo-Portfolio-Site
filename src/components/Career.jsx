const jobs = [
  {
    title: 'Web Designer, Jaws Family Dentistry',
    period: 'Nov 2025 – Present',
    desc: 'Contributed to the branding and visual identity. Developed and deployed a fully responsive website optimised for all platforms. Directed social media engagement and marketing strategies through content creation.',
  },
  {
    title: 'Technical Customer Support, Prodigy Finance',
    period: 'Apr 2023 – Aug 2025',
    desc: 'Facilitated onboarding and provided troubleshooting for new and existing customers. Provided technical support via various communication channels.',
  },
  {
    title: 'Junior Software Tester, HouseMe',
    period: 'Sept 2019 – July 2020',
    desc: 'Executed functional testing to ensure software quality. Provided technical support to users. Mapped user journeys to understand and improve user experience.',
  },
]

export default function Career() {
  return (
    <section id="career" className="py-32 relative">
      <div
        className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.07) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-white/30 text-sm font-medium tracking-widest mb-3">MY PATH</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Career <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-white/40 text-lg mt-2">My professional journey</p>
        </div>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="timeline-line rounded-full" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <div key={i} className="relative group">
                {/* Dot */}
                <div
                  className="absolute -left-8 top-1 w-3 h-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] transition-all duration-300 group-hover:scale-125 group-hover:border-[var(--color-accent-soft)]"
                  style={{ left: '-1.85rem' }}
                />

                <div className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-display font-semibold text-white text-base">{job.title}</h3>
                    <span className="tag-chip text-xs shrink-0">{job.period}</span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{job.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
