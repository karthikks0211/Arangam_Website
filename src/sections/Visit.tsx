import { useRef } from 'react'
import EnquiryForm from '@/components/EnquiryForm'
import { useScrollReveal } from '@/lib/useScrollReveal'

const MAP_LINK = 'https://maps.app.goo.gl/xGhge4UoEAnvzcfA8'

const DETAILS = [
  {
    label: 'Address',
    value: (
      <a href={MAP_LINK} target="_blank" rel="noreferrer" className="transition hover:text-stage">
        No 22/C7 TRB Complex, First Avenue, Ashok Nagar, Ashok Pillar, FB Cakes
        Building, 3rd Floor, Tamil Nadu 600083
      </a>
    ),
    icon: (
      <path
        d="M12 21s7-6.1 7-11.5S16.3 3 12 3 5 4.6 5 9.5 12 21 12 21Zm0-8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: 'Box office hours',
    value: 'Tue–Sun, 11am–8pm — sample hours, update before launch',
    icon: (
      <path
        d="M12 8v4l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: 'Reach us',
    value: (
      <a href="tel:+917904957723" className="transition hover:text-stage">
        +91 79049 57723
      </a>
    ),
    icon: (
      <path
        d="M4 6h16v12H4V6Zm0 0 8 7 8-7"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
]

export default function Visit() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef)

  return (
    <section
      id="visit"
      ref={sectionRef}
      aria-labelledby="visit-heading"
      className="relative overflow-hidden bg-ink py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-stage">
            Act III
          </p>
          <h2 id="visit-heading" className="font-display text-5xl leading-[0.95] text-cream sm:text-6xl">
            Let&rsquo;s set
            <br />
            the stage
          </h2>
          <p className="font-script mt-1 text-3xl text-stage sm:text-4xl">
            We&rsquo;d love to have you
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div data-reveal className="rounded-sm border-2 border-cream/15 bg-ink-soft p-6 sm:p-10">
            <EnquiryForm />
          </div>

          <div data-reveal className="flex flex-col gap-8">
            <ul className="flex flex-col gap-6">
              {DETAILS.map((detail) => (
                <li key={detail.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stage/50 text-stage">
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                      {detail.icon}
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-cream-dim">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-base text-cream">{detail.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-sm border border-dashed border-stage/40 bg-stage/5 p-5 text-xs leading-relaxed text-cream-dim">
              Box office hours above are a sample placeholder — swap them for
              Arangam&rsquo;s real hours before this page goes live.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
