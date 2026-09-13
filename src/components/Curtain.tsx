import { useLayoutEffect, useRef, useState } from 'react'
import { EASE_STAGE, gsap } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/lib/useReducedMotion'

const FOLD_TEXTURE =
  'repeating-linear-gradient(90deg, rgba(0,0,0,0.28) 0px, rgba(0,0,0,0.28) 2px, rgba(255,255,255,0.06) 2px, rgba(255,255,255,0.06) 14px, rgba(0,0,0,0.15) 14px, rgba(0,0,0,0.15) 26px)'

/**
 * Full-screen red theatre curtain that parts from the centre on load to
 * reveal the page. Skips straight to the open state when the visitor
 * prefers reduced motion, and offers a "Skip intro" control for everyone else.
 */
export default function Curtain() {
  const reducedMotion = usePrefersReducedMotion()
  const [done, setDone] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const markRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    if (reducedMotion) {
      setDone(true)
      return
    }

    const root = document.documentElement
    root.style.overflow = 'hidden'

    const finish = () => {
      root.style.overflow = ''
      setDone(true)
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: finish })
      timelineRef.current = tl

      tl.set([leftRef.current, rightRef.current], { xPercent: 0 })
        .from(markRef.current, { opacity: 0, y: 16, duration: 0.6, ease: 'power2.out' })
        .to({}, { duration: 0.55 }) // hold, house-lights-down beat
        .to(markRef.current, { opacity: 0, y: -12, duration: 0.45, ease: 'power2.in' })
        .to(
          leftRef.current,
          { xPercent: -100, duration: 1.15, ease: EASE_STAGE },
          '-=0.1',
        )
        .to(
          rightRef.current,
          { xPercent: 100, duration: 1.15, ease: EASE_STAGE },
          '<',
        )
        .to(overlayRef.current, { autoAlpha: 0, duration: 0.3 }, '-=0.2')
    })

    return () => ctx.revert()
  }, [reducedMotion])

  const skipIntro = () => {
    timelineRef.current?.progress(1)
  }

  if (done) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex"
      role="presentation"
      aria-hidden="true"
    >
      <div
        ref={leftRef}
        className="relative h-full w-1/2 bg-curtain shadow-[inset_-20px_0_40px_rgba(0,0,0,0.4)]"
        style={{ backgroundImage: FOLD_TEXTURE }}
      />
      <div
        ref={rightRef}
        className="relative h-full w-1/2 bg-curtain shadow-[inset_20px_0_40px_rgba(0,0,0,0.4)]"
        style={{ backgroundImage: FOLD_TEXTURE }}
      />

      <div
        ref={markRef}
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 text-center"
      >
        <span className="font-display text-4xl tracking-wide text-stage sm:text-6xl">
          ARANGAM
        </span>
        <span className="font-script text-2xl text-cream sm:text-3xl">
          Art from the heart
        </span>
      </div>

      <button
        type="button"
        onClick={skipIntro}
        className="absolute bottom-6 right-6 z-10 rounded-full border border-cream/40 bg-ink/40 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cream backdrop-blur transition hover:bg-ink/70"
      >
        Skip intro
      </button>
    </div>
  )
}
