import { useRef } from 'react'
import SpotlightField from '@/components/SpotlightField'
import StatCounter from '@/components/StatCounter'
import { useScrollReveal } from '@/lib/useScrollReveal'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef)

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-ink py-24 sm:py-32"
    >
      <SpotlightField variant="ink" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr_auto] lg:gap-10">
        <div data-reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-stage">
            Act I
          </p>
          <h2
            id="about-heading"
            className="font-display text-5xl leading-[0.95] text-cream sm:text-6xl"
          >
            A small
            <br />
            space.
          </h2>
          <p className="font-script text-4xl leading-tight text-stage sm:text-5xl">
            Big feeling.
          </p>
        </div>

        <div data-reveal className="max-w-lg self-center">
          <p className="text-xl leading-relaxed text-cream sm:text-2xl">
            Arangam means &ldquo;the stage&rdquo; &mdash; a place where
            expression is shared, not just performed.
          </p>
        </div>

        <div data-reveal className="max-w-sm self-center lg:justify-self-end">
          <p className="text-sm leading-relaxed text-cream-dim">
            Designed for close-up experiences and real connection, our
            flexible venue welcomes emerging performers, curious learners,
            independent makers and neighbours of every age.
          </p>

          <div className="mt-8 flex items-center gap-6 border-t border-ink-line pt-6">
            <StatCounter value={60} label="Seats" />
            <span className="h-10 w-px bg-ink-line" aria-hidden="true" />
            <StatCounter value={6} suffix="+" label="Formats" />
            <span className="h-10 w-px bg-ink-line" aria-hidden="true" />
            <StatCounter value={1} label="Community" />
          </div>
        </div>
      </div>
    </section>
  )
}
