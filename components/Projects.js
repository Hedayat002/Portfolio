import { useEffect, useRef } from 'react'

const projects = [
  {
    number: '01',
    title: 'GetMeChai',
    subtitle: 'Creator Support & Donation Platform',
    description: 'A full-stack Patreon-style platform supporting one-time and recurring creator donations. Features NextAuth OAuth + credentials auth, protected route middleware, and a fully responsive mobile-first UI.',
    highlights: [
      'Multi-tenant MongoDB data model for creators & supporters',
      'NextAuth OAuth + credentials with session management',
      'REST APIs (GET/POST/PUT/DELETE) tested via Postman',
      'Mobile-first responsive design with Tailwind CSS',
    ],
    tech: ['Next.js', 'MongoDB', 'NextAuth', 'Tailwind CSS', 'Vercel', 'REST API'],
    live: 'https://get-chai.vercel.app/',
    github: 'https://github.com/Hedayat002/Get-Chai',
    accent: 'teal',
    emoji: '☕',
  },
  {
    number: '02',
    title: 'ProfileHub',
    subtitle: 'Customizable Link-Sharing Platform',
    description: 'A dynamic link-sharing app with server-side rendering, dynamic routing, and user-based data rendering for personalized public profiles — think Linktree but custom-built.',
    highlights: [
      'Server-side rendering + dynamic routing in Next.js',
      'CRUD REST APIs built with Node.js/Express.js',
      'MongoDB for flexible user data with fast query patterns',
      'Real-time content updates and profile loading',
    ],
    tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Vercel', 'SSR'],
    live: 'https://profile-hub-gilt.vercel.app/',
    github: 'https://github.com/Hedayat002/ProfileHub',
    accent: 'blue',
    emoji: '🔗',
  },
  {
    number: '03',
    title: 'ShortLinks',
    subtitle: 'High-Performance URL Shortener',
    description: 'A fast URL shortening service with efficient redirection logic, end-to-end Postman-tested APIs, and optimized backend performance through lean API design and caching strategies.',
    highlights: [
      'Fast redirection engine with Node.js/Express.js',
      'Caching strategies for high-performance link resolution',
      'Analytics: create, resolve, delete, track links',
      'Lean API design demonstrating scalability principles',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Vercel', 'REST API', 'Caching'],
    live: 'https://shortlinks-6zs9.vercel.app/',
    github: 'https://github.com/Hedayat002/Nanolink',
    accent: 'purple',
    emoji: '⚡',
  },
]

const accentColors = {
  teal: {
    border: 'hover:border-teal-500/40',
    tag: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    number: 'text-teal-500/20',
    dot: 'bg-teal-400',
    btn: 'border-teal-500/40 text-teal-400 hover:bg-teal-500/10',
    glow: 'hover:shadow-teal-500/10',
  },
  blue: {
    border: 'hover:border-blue-500/40',
    tag: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    number: 'text-blue-500/20',
    dot: 'bg-blue-400',
    btn: 'border-blue-500/40 text-blue-400 hover:bg-blue-500/10',
    glow: 'hover:shadow-blue-500/10',
  },
  purple: {
    border: 'hover:border-purple-500/40',
    tag: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    number: 'text-purple-500/20',
    dot: 'bg-purple-400',
    btn: 'border-purple-500/40 text-purple-400 hover:bg-purple-500/10',
    glow: 'hover:shadow-purple-500/10',
  },
}

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <span className="font-mono text-teal-400 text-sm tracking-widest uppercase">03. Projects</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-2">Live Builds</h2>
          <div className="w-12 h-0.5 bg-teal-500 mt-4" />
          <p className="text-slate-400 mt-4 max-w-xl">
            Each project shipped to production independently — from schema design to Vercel deployment.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, i) => {
            const c = accentColors[project.accent]
            return (
              <div
                key={project.title}
                className={`reveal project-card rounded-2xl p-8 bg-[#060d14]/60 border border-slate-800/60 hover:shadow-xl ${c.border} ${c.glow} relative overflow-hidden`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Large number watermark */}
                <span className={`absolute top-4 right-8 font-display font-bold text-8xl select-none ${c.number}`}>
                  {project.number}
                </span>

                <div className="grid md:grid-cols-3 gap-8 relative">
                  {/* Left 2/3 */}
                  <div className="md:col-span-2 space-y-5">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{project.emoji}</span>
                      <div>
                        <h3 className="font-display font-bold text-2xl text-white">{project.title}</h3>
                        <p className="text-slate-400 text-sm mt-0.5">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-slate-400 leading-relaxed">{project.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {project.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${c.dot}`} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map(t => (
                        <span key={t} className={`text-xs font-mono px-2.5 py-1 rounded border ${c.tag}`}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Right 1/3 — buttons */}
                  <div className="flex md:flex-col gap-3 items-start md:justify-center">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-5 py-2.5 border rounded-lg text-sm font-mono transition-all duration-300 hover:-translate-y-0.5 ${c.btn}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7a6 6 0 1112 0A6 6 0 011 7zM7 1v12M1 7h12M2 4h10M2 10h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-5 py-2.5 border border-slate-700 text-slate-400 rounded-lg text-sm font-mono hover:border-slate-500 hover:text-slate-300 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
