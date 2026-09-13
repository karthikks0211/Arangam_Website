import { useRef } from 'react'
import SeatsIllustration from '@/components/SeatsIllustration'
import SpotlightField from '@/components/SpotlightField'
import { useMountReveal } from '@/lib/useScrollReveal'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  useMountReveal(sectionRef)

  return (
    <section
      id="home"
      ref={sectionRef}
      aria-label="Home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-stage pt-28 pb-16"
    >
      <SpotlightField variant="stage" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <p
            data-reveal
            className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-ink/70"
          >
            <span className="h-px w-8 bg-ink/50" aria-hidden="true" />
            A stage for every story
          </p>

          <h1 data-reveal className="font-display text-6xl leading-[0.92] text-ink sm:text-7xl lg:text-8xl">
            ARANGAM
          </h1>
          <p
            data-reveal
            className="font-script text-4xl leading-tight text-curtain sm:text-5xl"
          >
            Art from the heart
          </p>

          <p data-reveal className="mt-6 max-w-md text-base leading-relaxed text-ink/80 sm:text-lg">
            An intimate art space where music finds an audience, actors find
            their stage, and every creative idea finds room to breathe.
          </p>

          <div data-reveal className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#whats-on"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-stage transition hover:bg-curtain"
            >
              Explore the space
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-curtain hover:text-curtain"
            >
              Host your event
            </a>
          </div>
        </div>

        <div data-reveal className="relative mx-auto w-full max-w-md">
          <div className="relative rounded-sm border-4 border-ink bg-stage shadow-poster">
            <div className="flex flex-col items-center gap-6 px-8 pb-8 pt-10">
              <div className="text-center">
                <p className="font-display text-3xl leading-none text-ink sm:text-4xl">
                  ARANGAM
                </p>
                <p className="font-script text-xl text-curtain sm:text-2xl">
                  Art from the heart
                </p>
              </div>
              <SeatsIllustration className="w-full" rows={5} seatsPerRow={9} />
            </div>
            <div className="flex items-center justify-center border-t-4 border-ink bg-ink py-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-stage">
                Theatre &bull; Music &bull; Learning
              </p>
            </div>
          </div>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rotate-90 text-[11px] font-bold uppercase tracking-[0.35em] text-ink/50 sm:block"
      >
        Scroll for the next act
      </p>
    </section>
  )
}
