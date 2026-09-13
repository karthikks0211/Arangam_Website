import { useRef } from 'react'
import { useScrollReveal } from '@/lib/useScrollReveal'

const ICONS = {
  note: (
    <path
      d="M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  masks: (
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <circle cx="9" cy="11" r="6.2" />
      <circle cx="16" cy="14" r="6.2" />
      <path d="M6.8 9.6h.01M11.2 9.6h.01" />
      <path d="M6.8 13.4c.9.9 3.5.9 4.4 0" />
      <path d="M13.8 12.6h.01M18.2 12.6h.01" />
      <path d="M14.8 17.4c1.4-1.1 3-1.1 4.4 0" />
    </g>
  ),
  spark: (
    <path
      d="M12 3v4M12 17v4M5 12H3M21 12h-2M6.3 6.3 4.9 4.9M19.1 19.1l-1.4-1.4M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  arrow: (
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
}

const EXPERIENCES = [
  {
    icon: ICONS.note,
    title: 'Mini Concerts',
    description:
      'Acoustic evenings, indie showcases and soulful sessions where every note feels close.',
  },
  {
    icon: ICONS.masks,
    title: 'Drama Plays',
    description:
      'Intimate productions, rehearsed readings and experimental theatre in a focused setting.',
  },
  {
    icon: ICONS.spark,
    title: 'Acting Classes',
    description:
      'Practical workshops for children, beginners and working performers to build their craft.',
    highlight: true,
  },
  {
    icon: ICONS.arrow,
    title: 'Your Idea Here',
    description:
      'Poetry, storytelling, screenings, rehearsals, workshops and meaningful gatherings.',
  },
]

export default function Experiences() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef, { selector: '[data-reveal]', stagger: 0.1 })

  return (
    <section
      id="whats-on"
      ref={sectionRef}
      aria-labelledby="experiences-heading"
      className="relative bg-stage py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div data-reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-ink/70">
              Act II
            </p>
            <h2
              id="experiences-heading"
              className="font-display text-5xl leading-[0.95] text-ink sm:text-6xl"
            >
              What comes
              <br />
              alive here
            </h2>
          </div>
          <p data-reveal className="max-w-xs text-sm leading-relaxed text-ink/70 sm:text-right">
            From a single spotlight to a room full of rhythm, the space
            adapts to the idea.
          </p>
        </div>

        <div className="grid grid-cols-1 border border-ink sm:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCES.map((item, index) => (
            <article
              key={item.title}
              data-reveal
              className={`group flex flex-col gap-8 border-ink p-8 transition-colors duration-300 sm:p-9 [&:not(:last-child)]:border-b lg:[&:not(:last-child)]:border-b-0 lg:[&:not(:last-child)]:border-r ${
                item.highlight
                  ? 'bg-curtain text-cream'
                  : 'bg-stage text-ink hover:bg-stage-deep/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center border ${
                    item.highlight ? 'border-cream/60' : 'border-ink/60'
                  }`}
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                    {item.icon}
                  </svg>
                </span>
                <span className="font-display text-lg opacity-70">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl leading-none">{item.title}</h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    item.highlight ? 'text-cream/85' : 'text-ink/75'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
