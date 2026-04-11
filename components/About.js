import { useEffect, useRef } from 'react'

const stats = [
  { value: '3', label: 'Live Projects' },
  { value: '8.11', label: 'CGPA / 10' },
  // { value: '2+', label: 'Years Coding' },
  // { value: '500+', label: 'Hours Coded' },
  { value: 'Open', label: 'To Work' },
  { value: '∞', label: 'Passion' },
]

export default function About() {
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
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute right-0 top-1/2 w-px h-32 bg-gradient-to-b from-transparent via-teal-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16">
          <span className="font-mono text-teal-400 text-sm tracking-widest uppercase">01. About</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-2">
            Who I Am
          </h2>
          <div className="w-12 h-0.5 bg-teal-500 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div className="space-y-6">
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-xl border border-teal-500/30 bg-teal-500/5 flex items-center justify-center mb-6">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm a <span className="text-teal-400 font-semibold">Full Stack Developer</span> who has shipped 3 live 
                MERN/Next.js applications handling authentication, REST APIs, and Vercel deployment — each built 
                and validated end-to-end independently.
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <p className="text-slate-400 leading-relaxed">
                Proficient in developing and testing RESTful APIs with Postman, implementing secure auth systems 
                using NextAuth and JWT, and crafting responsive, mobile-first interfaces with Tailwind CSS.
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.3s' }}>
              <p className="text-slate-400 leading-relaxed">
                Driven by a strong sense of ownership — every project goes from idea to production with clean, 
                maintainable code and measurable performance in mind.
              </p>
            </div>

            {/* Education card */}
            <div className="reveal border border-teal-500/20 rounded-xl p-6 bg-[#060d14]/50 hover:border-teal-500/40 transition-colors" style={{ transitionDelay: '0.4s' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-teal-400">🎓</span>
                </div>
                <div>
                  <p className="font-display font-semibold text-white">B.Tech — Computer Science Engineering</p>
                  <p className="text-slate-400 text-sm mt-1">Shankara Institute of Technology, Jaipur</p>
                  <div className="flex gap-4 mt-3">
                    <span className="text-xs font-mono px-2 py-1 bg-teal-500/10 text-teal-400 rounded border border-teal-500/20">2021 – 2025</span>
                    <span className="text-xs font-mono px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">CGPA: 8.11 / 10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — stats + info */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 reveal" style={{ transitionDelay: '0.2s' }}>
              {stats.map((s, i) => (
                <div key={i} className="border border-teal-500/10 rounded-xl p-5 bg-[#060d14]/50 text-center hover:border-teal-500/30 transition-colors">
                  <p className="font-display font-bold text-3xl text-teal-400 text-glow">{s.value}</p>
                  <p className="text-slate-500 text-sm mt-1 font-mono">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Quick info */}
            <div className="reveal border border-teal-500/10 rounded-xl p-6 bg-[#060d14]/50 space-y-4" style={{ transitionDelay: '0.3s' }}>
              {[
                { label: 'Location', value: 'India', icon: '📍' },
                { label: 'Email', value: 'hedayatali038@gmail.com', icon: '📧', href: 'mailto:hedayatali038@gmail.com' },
                { label: 'Languages', value: 'Hindi (Native) · English (Professional)', icon: '🌐' },
                { label: 'Focus', value: 'DSA + System Design', icon: '⚡' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3 text-sm">
                  <span className="w-8 text-center">{item.icon}</span>
                  <span className="text-slate-500 w-20 font-mono text-xs uppercase tracking-wide">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="text-teal-400 hover:text-teal-300 transition-colors">{item.value}</a>
                  ) : (
                    <span className="text-slate-300">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Resume download */}
            <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 w-full py-3 border border-teal-500/30 text-teal-400 font-mono text-sm rounded-xl hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1v9M8 10l-3-3M8 10l3-3M1 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
