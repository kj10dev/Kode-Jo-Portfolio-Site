import { useState } from 'react'

const projects = [
  {
    id: 'project1',
    title: 'Joyful Jaws',
    desc: 'An intuitive and user-friendly redesign for a dental practice website',
    images: ['/assets/projects/Joyfuljaws_site.jpg'],
    tags: ['HTML', 'CSS', 'Figma', 'Framer'],
    link: '../../2025/jawsfamilydentistry/joyful-jaws.com',
    linkLabel: 'View Website',
    modalTitle: 'Joyful Jaws - Website design',
    modalDesc: `A comprehensive design system featuring reusable components, consistent styling, and accessibility-first approach. Built to scale across multiple projects. Joyful Jaws Dentistry is a modern, community-focused dental practice that welcomes patients and builds trust from the first impression. The website design presents a friendly, professional brand offering personalized, affordable, and comprehensive dental care to Mdantsane, Cambridge and surrounding communities.`,
    features: ['Web design & branding', 'Responsive and accessible'],
    techTags: ['HTML5', 'CSS3', 'Figma', 'Framer'],
  },
  {
    id: 'project2',
    title: 'CSTK Board Design',
    desc: 'This project was to redesign a poster for a company, maintaining the branding while applying a minimalistic emphasis.',
    images: ['/assets/projects/CSTK_1.webp', '/assets/projects/CSTK_2.webp'],
    tags: ['Figma'],
    link: null,
    modalTitle: 'CSTK Board Design',
    modalDesc: 'A comprehensive redesign of a poster for a company, maintaining the branding while applying a minimalistic emphasis to create a modern and impactful visual presentation.',
    features: [
      'Redesigned a poster for a company, maintaining the branding while applying a minimalistic emphasis',
      'Implemented a clean and modern design that effectively communicates the company\'s message',
      'Utilized design principles to create a visually appealing and impactful poster',
    ],
    techTags: ['Figma'],
  },
  {
    id: 'project3',
    title: '3D Futuristic City',
    desc: 'A real-time interactive 3D futuristic city',
    images: ['/assets/projects/3D city.png'],
    tags: ['Three.js', 'JavaScript', 'WebGL', 'HTML & CSS', '3D Graphics'],
    link: 'https://3dfuturistic-citythreejs.vercel.app/',
    linkLabel: 'View Website',
    modalTitle: '3D Futuristic City',
    modalDesc: 'A real-time interactive 3D futuristic city using transformations, projections, lighting, shading, and texture mapping. The city will feature skyscrapers, neon billboards, flying vehicles, and glowing streetlights to showcase graphics techniques.',
    features: ['Transformations', 'Lighting', 'Mapping', 'Shading'],
    techTags: ['Three.js', 'JavaScript', 'WebGL', 'HTML & CSS', '3D'],
  },
  {
    id: 'project4',
    title: 'Little FootPrints Playschool & Aftercare Board Design',
    desc: 'A playful and accessible board design for a playschool featuring bold typography, friendly icons, and consistent branding',
    images: ['/assets/projects/Littlefootprints_2.jpg', '/assets/projects/Littlefootprints_1.jpg', '/assets/projects/LittleFootprints_3.jpeg'],
    tags: ['Figma'],
    link: null,
    modalTitle: 'Little FootPrints Playschool & Aftercare Board Design',
    modalDesc: 'A comprehensive board design for Little FootPrints Playschool featuring a playful yet professional aesthetic that appeals to both children and parents while maintaining strong brand identity.',
    features: [
      'Utilized bold and clear typography to ensure readability and establish strong visual hierarchy throughout the design',
      'Designed playful and friendly icons to enhance accessibility while maintaining engagement and user-friendliness',
      'Maintained consistent branding through strategic palette selection and practical color choices that reflect the company\'s identity',
    ],
    techTags: ['Figma', 'Design Systems', 'Typography', 'Color Theory'],
  },
  {
    id: 'project5',
    title: 'Jaws Family Dentistry Website',
    desc: 'A modern, responsive dental practice website with advanced technology features, patient testimonials, and easy online appointment booking',
    images: ['/assets/projects/JawsFD_1.png', '/assets/projects/JawsFD_2.png'],
    tags: ['HTML', 'CSS', 'Responsive Design', 'UX/UI'],
    link: 'https://www.jawsdentistry.co.za',
    linkLabel: 'View Website',
    modalTitle: 'Jaws Family Dentistry Website',
    modalDesc: 'A modern, responsive website for Jaws Family Dentistry highlighting services, patient testimonials, and easy online booking.',
    features: [
      'Responsive, mobile-first layout',
      'Online appointment booking',
      'Patient testimonials & team profiles',
      'Clear services and contact pages',
    ],
    techTags: ['HTML5', 'CSS3', 'Responsive Design', 'JavaScript'],
  },
  {
    id: 'project6',
    title: 'UX/UI Designs & Motion Graphics',
    desc: 'Strategic UI design paired with motion design to create engaging, intuitive digital experiences.',
    images: ['/assets/projects/Notion.png'],
    tags: ['UX/UI', 'Motion Design', 'Figma'],
    link: '#',
    linkLabel: 'View More',
    modalTitle: 'UI/UX & motion',
    modalDesc: 'A combination of designs showcasing elegance, motion and creativity.',
    features: [
      'Interactive design and user experience optimization',
      'Design system creation and component libraries',
      'Micro-animations and motion principles',
      'Accessibility and responsive design',
    ],
    techTags: ['Figma'],
  },
  {
    id: 'project7',
    title: 'Zuri-Studio',
    desc: 'Website design for a Design agency that focuses on strategic blend of design, technology, and performance — crafted to help ambitious brands stand out, scale, and succeed online.',
    images: ['/assets/projects/Zuri-Studios.png'],
    tags: ['HTML', 'CSS', 'Figma', 'GSAP'],
    link: 'https://www.zuri-studio.co.za',
    linkLabel: 'View Website',
    modalTitle: 'Zuri-Studio',
    modalDesc: 'Website design & development as well as branding for a Design agency that focuses on strategic blend of design, technology, and performance — crafted to help ambitious brands stand out, scale, and succeed online.',
    features: [
      'Interactive design and user experience optimization',
      'Design system creation and component libraries',
      'Micro-animations and GSAP transitions',
      'Accessibility and responsive design',
    ],
    techTags: ['HTML', 'CSS', 'Figma', 'GSAP'],
  },
]

function Modal({ project, onClose, onImageClick }) {
  const [imgIdx, setImgIdx] = useState(0)
  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-[min(92vw,42rem)] max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[var(--color-bg-secondary)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
        >
          ×
        </button>

        {/* Image gallery */}
        {project.images.length > 0 && (
          <div className="relative aspect-video bg-black/20 rounded-t-2xl overflow-hidden group">
            <button
              type="button"
              onClick={() => onImageClick?.(project.id, imgIdx)}
              className="relative block w-full h-full"
              aria-label={`Enlarge ${project.title} image ${imgIdx + 1}`}
            >
              <img
                src={project.images[imgIdx]}
                alt={`${project.title} – ${imgIdx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/35 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white/75 backdrop-blur-sm">
                Enlarge
              </span>
            </button>
            {project.images.length > 1 && (
              <>
                <button
                  onClick={() => setImgIdx((p) => (p - 1 + project.images.length) % project.images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass flex items-center justify-center text-white/70 hover:text-white"
                >❮</button>
                <button
                  onClick={() => setImgIdx((p) => (p + 1) % project.images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass flex items-center justify-center text-white/70 hover:text-white"
                >❯</button>
                <span className="absolute bottom-2 right-3 text-white/50 text-xs">{imgIdx + 1}/{project.images.length}</span>
              </>
            )}
          </div>
        )}

        <div className="p-6 space-y-5">
          <h2 className="font-display text-2xl font-bold">{project.modalTitle}</h2>
          <p className="text-white/60 text-sm leading-relaxed">{project.modalDesc}</p>

          <div>
            <h3 className="font-display font-semibold text-sm text-white/80 mb-2">Key Features</h3>
            <ul className="space-y-1">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-white/55">
                  <span className="text-amber-400 mt-0.5">›</span>{f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm text-white/80 mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.techTags.map((t) => <span key={t} className="tag-chip">{t}</span>)}
            </div>
          </div>

          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-amber-400 hover:bg-amber-500 text-white transition-colors"
            >
              {project.linkLabel || 'View Website'}
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function ImageViewer({ project, imageIndex, onClose, onNext, onPrev }) {
  if (!project || project.images.length === 0) return null

  const currentIndex = Math.max(0, Math.min(imageIndex, project.images.length - 1))
  const currentImage = project.images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      <div
        className="relative w-[min(94vw,72rem)] max-h-[86vh] overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/35 text-xl text-white/80 transition hover:text-white"
          aria-label="Close enlarged image"
        >
          ×
        </button>

        <div className="relative max-h-[92vh] bg-black">
          <img
            src={currentImage}
            alt={`${project.title} – ${currentIndex + 1}`}
            className="max-h-[92vh] w-full object-contain"
          />

          {project.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={onPrev}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-xl text-white/80 transition hover:text-white"
                aria-label="Previous image"
              >
                ❮
              </button>
              <button
                type="button"
                onClick={onNext}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-xl text-white/80 transition hover:text-white"
                aria-label="Next image"
              >
                ❯
              </button>
              <span className="absolute bottom-3 right-4 rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-xs text-white/70 backdrop-blur-sm">
                {currentIndex + 1}/{project.images.length}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null)
  const [expandedImage, setExpandedImage] = useState(null)
  const [imgIdxMap, setImgIdxMap] = useState({})

  const modalProject = projects.find((p) => p.id === activeModal) || null
  const expandedProject = projects.find((p) => p.id === expandedImage?.projectId) || null

  const getIdx = (id) => imgIdxMap[id] ?? 0
  const setIdx = (id, fn) =>
    setImgIdxMap((prev) => {
      const cur = prev[id] ?? 0
      const proj = projects.find((p) => p.id === id)
      const next = typeof fn === 'function' ? fn(cur) : fn
      return { ...prev, [id]: ((next % proj.images.length) + proj.images.length) % proj.images.length }
    })

  const openImageViewer = (projectId, imageIndex) => {
    const project = projects.find((p) => p.id === projectId)
    if (!project || !project.images.length) return

    setExpandedImage({
      projectId,
      index: ((imageIndex % project.images.length) + project.images.length) % project.images.length,
    })
  }

  const cycleExpandedImage = (direction) => {
    if (!expandedImage) return

    const project = projects.find((p) => p.id === expandedImage.projectId)
    if (!project || !project.images.length) return

    setExpandedImage((prev) => {
      if (!prev) return prev
      const nextIndex = (prev.index + direction + project.images.length) % project.images.length
      return { ...prev, index: nextIndex }
    })
  }

  return (
    <section id="projects" className="py-32 relative">
      <div
        className="absolute top-1/2 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)', transform: 'translate(40%, -50%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-white/30 text-sm font-medium tracking-widest mb-3">MY WORK</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/40 text-lg mt-2">A selection of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => {
            const idx = getIdx(project.id)
            return (
              <article
                key={project.id}
                className="glass rounded-2xl overflow-hidden project-card-hover flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-video bg-black/20 overflow-hidden group">
                  <button
                    type="button"
                    onClick={() => openImageViewer(project.id, idx)}
                    className="relative block h-full w-full"
                    aria-label={`Enlarge ${project.title} image ${idx + 1}`}
                  >
                    <img
                      src={project.images[idx]}
                      alt={`${project.title} – ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full border border-white/15 bg-black/35 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-white/75 backdrop-blur-sm">
                      Enlarge
                    </span>
                  </button>

                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setIdx(project.id, (p) => p - 1)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full glass flex items-center justify-center text-white/60 hover:text-white text-xs"
                      >❮</button>
                      <button
                        onClick={() => setIdx(project.id, (p) => p + 1)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full glass flex items-center justify-center text-white/60 hover:text-white text-xs"
                      >❯</button>
                      <span className="absolute bottom-2 right-2 text-white/40 text-xs">{idx + 1}/{project.images.length}</span>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="font-display font-semibold text-base text-white leading-snug">{project.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1">{project.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t) => <span key={t} className="tag-chip">{t}</span>)}
                  </div>

                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={() => setActiveModal(project.id)}
                      className="flex-1 py-2 rounded-full text-sm font-medium glass hover:bg-[var(--color-accent)]/20 text-white/80 hover:text-white transition-all duration-200 text-center"
                    >
                      View Details
                    </button>
                    {project.link && project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-full text-sm font-medium bg-amber-600/70 hover:bg-amber-500 text-white transition-all duration-200 text-center"
                      >
                        {project.linkLabel || 'Visit'}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {activeModal && (
        <Modal
          project={modalProject}
          onClose={() => setActiveModal(null)}
          onImageClick={(projectId, imageIndex) => {
            setActiveModal(null)
            openImageViewer(projectId, imageIndex)
          }}
        />
      )}

      {expandedProject && (
        <ImageViewer
          project={expandedProject}
          imageIndex={expandedImage.index}
          onClose={() => setExpandedImage(null)}
          onPrev={() => cycleExpandedImage(-1)}
          onNext={() => cycleExpandedImage(1)}
        />
      )}
    </section>
  )
}
