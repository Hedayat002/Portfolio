import { useState, useEffect } from 'react'

const navLinks = ['about', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(id => document.getElementById(id))
      sections.forEach(sec => {
        if (sec) {
          const rect = sec.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) setActive(sec.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#020408]/90 backdrop-blur-xl border-b border-teal-500/10' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-display font-bold text-xl tracking-tight">
          <span className="text-white">H</span>
          <span className="text-teal-400">.</span>
          <span className="text-slate-400 text-sm font-mono ml-1">dev</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`nav-link text-sm font-mono uppercase tracking-widest transition-colors duration-300 ${active === link ? 'text-teal-400 active' : 'text-slate-400 hover:text-white'}`}
            >
              {link}
            </button>
          ))}
          <a
            href="mailto:hedayatali038@gmail.com"
            className="px-4 py-2 border border-teal-500/40 text-teal-400 text-sm font-mono rounded hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
          <span className={`block w-6 h-0.5 bg-teal-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
          <span className={`block w-6 h-0.5 bg-teal-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
          <span className={`block w-6 h-0.5 bg-teal-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#060d14]/95 backdrop-blur-xl border-t border-teal-500/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-slate-300 font-mono uppercase tracking-widest text-sm hover:text-teal-400 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
