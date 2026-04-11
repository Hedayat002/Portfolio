import { useEffect, useState } from 'react'

const roles = ['Full Stack Developer', 'MERN Stack Engineer', 'Next.js Developer', 'API Architect']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = roles[roleIdx]
    let i = 0
    let timeout

    if (typing) {
      const type = () => {
        if (i <= role.length) {
          setDisplayed(role.slice(0, i))
          i++
          timeout = setTimeout(type, 70)
        } else {
          timeout = setTimeout(() => setTyping(false), 2000)
        }
      }
      type()
    } else {
      const erase = () => {
        if (i >= 0) {
          setDisplayed(role.slice(0, i))
          i--
          timeout = setTimeout(erase, 35)
        } else {
          setRoleIdx(p => (p + 1) % roles.length)
          setTyping(true)
        }
      }
      i = role.length
      erase()
    }

    return () => clearTimeout(timeout)
  }, [roleIdx, typing])

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Orbs */}
      <div className="orb w-96 h-96 bg-teal-500 top-20 -left-20" />
      <div className="orb w-72 h-72 bg-blue-500 bottom-20 right-10" />
      <div className="orb w-48 h-48 bg-teal-300 top-1/2 left-1/2 -translate-x-1/2" style={{ opacity: 0.05 }} />

      {/* Grid lines decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/10 to-transparent" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-teal-500/10 to-transparent" />
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-teal-500/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/5 text-teal-400 text-sm font-mono mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="font-display font-bold leading-none mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="block text-6xl md:text-8xl text-white">MD HEDAYAT</span>
          <span className="block text-6xl md:text-8xl text-teal-400 text-glow">ALI</span>
        </h1>

        {/* Typing role */}
        <div className="h-10 flex items-center justify-center mb-6" style={{ animationDelay: '0.3s' }}>
          <span className="font-mono text-xl md:text-2xl text-slate-300">
            {displayed}
            <span className="inline-block w-0.5 h-6 bg-teal-400 ml-1 animate-pulse" />
          </span>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Shipped <span className="text-teal-400 font-semibold">3 live MERN/Next.js apps</span> handling auth, REST APIs, and Vercel deployment. 
          Every project goes from idea to production — clean code, measurable performance.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-[#020408] font-display font-semibold rounded transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5"
          >
            View Projects →
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 border border-teal-500/40 text-teal-400 font-display font-semibold rounded hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get In Touch
          </button>
        </div>

        {/* Social links */}
        <div className="flex gap-5 justify-center mt-10 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/Hedayat002', icon: 'GH' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hedayat002/', icon: 'LI' },
            { label: 'Email', href: 'mailto:hedayatali038@gmail.com', icon: '@' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-teal-400 transition-all duration-300 text-sm font-mono hover:-translate-y-1">
              <span className="w-8 h-8 flex items-center justify-center border border-slate-700 hover:border-teal-500/50 rounded text-xs transition-colors">{s.icon}</span>
              {s.label}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2L8 14M8 14L13 9M8 14L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
