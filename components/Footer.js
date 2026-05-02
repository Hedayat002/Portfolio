export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-white">H<span className="text-teal-400">.</span></span>
          <span className="text-slate-500 text-sm font-mono">Built with Next.js · MongoDB · Tailwind CSS</span>
        </div>
        <div className="flex gap-6">
          {[
            { label: 'GitHub', href: 'https://github.com/Hedayat002' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hedayat002/' },
            { label: 'Email', href: 'mailto:hedayatali038@gmail.com' },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              className="text-sm font-mono text-slate-500 hover:text-teal-400 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
       <p className="text-slate-600 text-xs font-mono">
  © {new Date().getFullYear()} Md Hedayat Ali
</p>
      </div>
    </footer>
  )
}
