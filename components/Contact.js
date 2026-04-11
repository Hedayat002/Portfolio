import { useEffect, useRef, useState } from 'react'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [error, setError] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Something went wrong')

      setStatus('success')
      setForm(initialForm)
      setTimeout(() => setStatus(null), 5000)
    } catch (err) {
      setStatus('error')
      setError(err.message)
      setTimeout(() => setStatus(null), 5000)
    }
  }

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'hedayatali038@gmail.com', href: 'mailto:hedayatali038@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/hedayat002', href: 'https://www.linkedin.com/in/hedayat002/' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/Hedayat002', href: 'https://github.com/Hedayat002' },
  ]

  return (
    <section id="contact" ref={ref} className="py-32 relative bg-[#060d14]/40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16 text-center">
          <span className="font-mono text-teal-400 text-sm tracking-widest uppercase">04. Contact</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-2">Let's Build Together</h2>
          <div className="w-12 h-0.5 bg-teal-500 mt-4 mx-auto" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Have a project in mind? Looking to collaborate? Messages are saved directly to my database — I'll reply within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left — Contact info */}
          <div className="md:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal flex items-center gap-4 p-4 border border-slate-800 rounded-xl bg-[#060d14]/50 hover:border-teal-500/30 hover:bg-teal-500/5 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">{item.label}</p>
                  <p className="text-slate-300 text-sm mt-0.5 group-hover:text-teal-400 transition-colors">{item.value}</p>
                </div>
                <svg className="ml-auto text-slate-600 group-hover:text-teal-400 transition-colors" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}

            {/* DB badge */}
            <div className="reveal p-4 border border-teal-500/20 rounded-xl bg-teal-500/5 mt-4" style={{ transitionDelay: '0.4s' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-teal-400 text-xs font-mono">MongoDB powered</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Your message is stored securely in a MongoDB database. No message gets lost.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="reveal space-y-4 border border-slate-800 rounded-2xl p-8 bg-[#060d14]/50">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="form-input w-full px-4 py-3 rounded-xl text-sm font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="form-input w-full px-4 py-3 rounded-xl text-sm font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="form-input w-full px-4 py-3 rounded-xl text-sm font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="form-input w-full px-4 py-3 rounded-xl text-sm font-mono resize-none"
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-mono">
                  <span>✓</span> Message saved! I'll be in touch soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-mono">
                  <span>✕</span> {error}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 bg-teal-500 hover:bg-teal-400 disabled:opacity-50 text-[#020408] font-display font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="25" strokeDashoffset="10"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>Send Message →</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
