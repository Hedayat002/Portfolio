import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'teal',
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'Dynamic Routing'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'blue',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'NextAuth', 'JWT Authentication', 'Middleware'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: 'green',
    skills: ['MongoDB', 'Mongoose', 'Query Optimization', 'Schema Design', 'NoSQL'],
  },
  {
    category: 'Tools & Testing',
    icon: '🔧',
    color: 'amber',
    skills: ['Postman', 'Git', 'GitHub', 'VS Code', 'Figma', 'Vercel'],
  },
  {
    category: 'Languages',
    icon: '💻',
    color: 'purple',
    skills: ['JavaScript (ES6+)', 'Python'],
  },
]

const colorMap = {
  teal: 'border-teal-500/30 text-teal-400 bg-teal-500/5 hover:bg-teal-500/15 hover:border-teal-400/60',
  blue: 'border-blue-500/30 text-blue-400 bg-blue-500/5 hover:bg-blue-500/15 hover:border-blue-400/60',
  green: 'border-green-500/30 text-green-400 bg-green-500/5 hover:bg-green-500/15 hover:border-green-400/60',
  amber: 'border-amber-500/30 text-amber-400 bg-amber-500/5 hover:bg-amber-500/15 hover:border-amber-400/60',
  purple: 'border-purple-500/30 text-purple-400 bg-purple-500/5 hover:bg-purple-500/15 hover:border-purple-400/60',
}

const headerColor = {
  teal: 'text-teal-400',
  blue: 'text-blue-400',
  green: 'text-green-400',
  amber: 'text-amber-400',
  purple: 'text-purple-400',
}

const bgAccent = {
  teal: 'bg-teal-500/5 border-teal-500/20',
  blue: 'bg-blue-500/5 border-blue-500/20',
  green: 'bg-green-500/5 border-green-500/20',
  amber: 'bg-amber-500/5 border-amber-500/20',
  purple: 'bg-purple-500/5 border-purple-500/20',
}

export default function Skills() {
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
    <section id="skills" ref={ref} className="py-32 relative bg-[#060d14]/40">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <span className="font-mono text-teal-400 text-sm tracking-widest uppercase">02. Skills</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-2">Tech Stack</h2>
          <div className="w-12 h-0.5 bg-teal-500 mt-4" />
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className={`reveal border rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 ${bgAccent[group.color]}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className={`font-display font-semibold text-lg ${headerColor[group.color]}`}>
                  {group.category}
                </h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className={`text-xs font-mono px-3 py-1.5 rounded border cursor-default transition-all duration-300 ${colorMap[group.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar — currently learning */}
        <div className="reveal mt-10 border border-teal-500/10 rounded-xl p-5 bg-[#060d14]/50 flex flex-wrap items-center gap-4" style={{ transitionDelay: '0.5s' }}>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-slate-400 font-mono text-sm">Currently mastering:</span>
          </div>
          {['Data Structures & Algorithms', 'System Design', 'TypeScript', 'Docker'].map(item => (
            <span key={item} className="text-xs font-mono px-3 py-1 rounded-full border border-slate-700 text-slate-400 bg-slate-800/50">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
