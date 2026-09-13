import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#whats-on', label: "What's On" },
  { href: '#visit', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-ink/10 bg-stage/95 shadow-[0_4px_20px_rgba(20,14,10,0.08)] backdrop-blur'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a
          href="#home"
          className="font-display text-xl tracking-wide text-ink sm:text-2xl"
        >
          ARANGAM<span className="text-curtain">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-ink/80 transition hover:text-curtain"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#visit"
          className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-stage transition hover:bg-curtain md:inline-flex"
        >
          Plan a visit
          <span aria-hidden="true">→</span>
        </a>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-ink/10 bg-stage px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-semibold text-ink transition hover:bg-ink/5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#visit"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-stage"
            >
              Plan a visit
              <span aria-hidden="true">→</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
