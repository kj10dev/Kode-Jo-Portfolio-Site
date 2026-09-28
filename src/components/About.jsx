const skills = [
  { name: 'Kotlin', desc: 'Modern Android development', icon: '/assets/icons/kotlin-1.svg' },
  { name: 'Python', desc: 'Backend & scripting', icon: '/assets/icons/python-5.svg' },
  { name: 'SQL', desc: 'Database management', icon: '/assets/icons/mysql-2.svg' },
  { name: 'HTML & CSS', desc: 'Web fundamentals', icon: '/assets/icons/HTML&CSS.svg' },
  { name: 'Figma', desc: 'UX/UI Design', icon: '/assets/icons/figma-icon.svg' },
  { name: 'Three.js', desc: '3D graphics on web', icon: '/assets/icons/threejs-1.svg' },
]

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="mb-16">
          <p className="text-white/30 text-sm font-medium tracking-widest mb-3">WHO I AM</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-white/40 text-lg mt-2">
            I am <span className="gradient-text font-semibold">Kojo Ahyia-Osae</span>
          </p>
          <p className="text-white/40 text-base mt-1">Passionate about creating stunning digital experiences</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-white/65 text-lg leading-relaxed">
              I'm a creative with a strong foundation in both design and programming.
              My passion lies in creating visually stunning, user-friendly digital experiences that
              combine intuitive design with solid technical implementation.
            </p>
            <p className="text-white/65 text-lg leading-relaxed">
              I specialize in modern web design and development including micro-animations, 3D graphics,
              always striving to push the boundaries.
            </p>

            {/* Stats row */}
            <div className="flex gap-10 pt-4">
              {[['7+', 'Projects delivered'], ['5+', 'Years experience'], ['3', 'Industries served']].map(([num, label]) => (
                <div key={label}>
                  <div className="gradient-text font-display text-3xl font-bold">{num}</div>
                  <div className="text-white/40 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills grid */}
          <div>
            <p className="text-white/30 text-sm font-medium tracking-widest mb-6">SKILLS & TOOLS</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="glass rounded-xl p-4 flex flex-col gap-3 skill-icon-hover cursor-default group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-indigo-500/10 transition-colors duration-200">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-white">{skill.name}</h3>
                    <p className="text-white/40 text-xs mt-0.5">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
