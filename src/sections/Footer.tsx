const MAP_LINK = 'https://maps.app.goo.gl/xGhge4UoEAnvzcfA8'

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/arangam_artspace/',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </>
    ),
  },
  {
    name: 'Facebook',
    href: null,
    icon: (
      <path
        d="M14 8.5h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3.5h2V21h3.5v-6.5H16l.5-3.5h-3V9c0-.55.45-1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: 'YouTube',
    href: null,
    icon: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
      </>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-ink pt-16 text-cream-dim">
      <div
        aria-hidden="true"
        className="h-4 w-full"
        style={{
          backgroundImage:
            'repeating-radial-gradient(circle at 12px 0, transparent 0, transparent 9px, var(--color-ink) 9px, var(--color-ink) 10px)',
          backgroundColor: 'var(--color-curtain-deep)',
          backgroundSize: '24px 16px',
          position: 'absolute',
          top: '-16px',
          left: 0,
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-ink-line pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl text-cream">
              ARANGAM<span className="text-curtain">.</span>
            </p>
            <p className="font-script mt-1 text-2xl text-stage">Art from the heart</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A 60-seat stage for music, drama, and every idea in between.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-cream">Visit</h3>
            <p className="mt-4 text-sm leading-relaxed">
              <a href={MAP_LINK} target="_blank" rel="noreferrer" className="transition hover:text-stage">
                No 22/C7 TRB Complex, First Avenue
                <br />
                Ashok Nagar, Ashok Pillar
                <br />
                FB Cakes Building, 3rd Floor
                <br />
                Tamil Nadu 600083
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-cream">Contact</h3>
            <p className="mt-4 text-sm leading-relaxed">
              <a href="tel:+917904957723" className="transition hover:text-stage">
                +91 79049 57723
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-cream">Follow</h3>
            <ul className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((social) =>
                social.href ? (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-dim/30 text-cream-dim transition hover:border-stage hover:text-stage"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                        {social.icon}
                      </svg>
                    </a>
                  </li>
                ) : (
                  <li key={social.name}>
                    <span
                      aria-label={`${social.name} (coming soon)`}
                      title={`${social.name} — coming soon`}
                      className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-full border border-cream-dim/15 text-cream-dim/40"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                        {social.icon}
                      </svg>
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Arangam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
