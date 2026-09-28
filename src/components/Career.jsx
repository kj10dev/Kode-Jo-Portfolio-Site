const jobs = [
  {
    title: 'Web designer, Jaws Family Dentistry',
    period: 'Nov 2025 – Present',
    desc: 'Contributed to the branding and visual identity. Developed and deployed a fully responsive website optimised for all platforms. Directed social media engagement and marketing strategies through content creation.',
  },
  {
    title: 'Servicing Agent, Prodigy Finance',
    period: 'Apri 2023 – Aug 2025',
    desc: "As a dedicated customer service professional, I specialize in educating clients about industry insights, potential risks, and tailored product offerings to empower informed decision-making. I actively engage with master's students, providing clear and accurate updates on their loan status, terms, and conditions while addressing inquiries and concerns promptly and professionally. Additionally, I excel in onboarding and troubleshooting for new and existing customers, ensuring seamless navigation of the mobile app and fostering a positive, stress-free experience.",
  },
  {
    title: 'Customer Success, Luno',
    period: 'Aug 2021 – Feb 2023',
    desc: 'I educated clients on industry insights, potential risks, and tailored product offerings to help them make informed decisions. I delivered technical support through email, live chat, and outbound calls, ensuring prompt and effective solutions. I collaborated with cross-functional teams to resolve customer issues and mitigate complaints, enhancing overall satisfaction. Upholding strict confidentiality, I assisted with onboarding, verification, and app navigation, while providing tips on security and mobile app best practices to ensure a seamless and secure user experience.',
  },
  {
    title: 'Junior Software Tester/Technical Support, HouseMe',
    period: 'Sept 2019 – Dec 2020',
    desc: 'I focused on ensuring flawless system performance through functional testing and provided technical support to resolve issues quickly. I mapped user journeys to enhance experiences, handled calls to assist customers, and managed user onboarding for a smooth introduction to our services.',
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
