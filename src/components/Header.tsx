import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact']

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
    <nav className="nav shell" aria-label="Primary navigation">
      <a className="monogram" href="#top" aria-label="Aniruddha Sonawane, home">AS<span>.</span></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="nav-links" aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
      <div id="nav-links" className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
      </div>
    </nav>
  </header>
}
