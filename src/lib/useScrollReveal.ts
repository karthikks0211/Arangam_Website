import { type RefObject, useLayoutEffect } from 'react'
import { EASE_SOFT, gsap, ScrollTrigger } from './gsap'
import { usePrefersReducedMotion } from './useReducedMotion'

interface ScrollRevealOptions {
  /** CSS selector (relative to the container) for elements to reveal. */
  selector?: string
  /** Stagger delay in seconds between each revealed element. */
  stagger?: number
  /** Vertical travel distance in pixels before settling. */
  distance?: number
  /** ScrollTrigger `start` position. */
  start?: string
}

/**
 * Fades + rises every `[data-reveal]` element inside `containerRef` into place
 * as it scrolls into view. No-ops (elements simply appear) when the visitor
 * has requested reduced motion.
 */
export function useScrollReveal(
  containerRef: RefObject<HTMLElement | null>,
  {
    selector = '[data-reveal]',
    stagger = 0.12,
    distance = 40,
    start = 'top 82%',
  }: ScrollRevealOptions = {},
) {
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector)
      if (targets.length === 0) return

      if (reducedMotion) {
        gsap.set(targets, { opacity: 1, y: 0, clearProps: 'transform' })
        return
      }

      gsap.set(targets, { opacity: 0, y: distance })
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: EASE_SOFT,
        stagger,
        scrollTrigger: {
          trigger: container,
          start,
          toggleActions: 'play none none reverse',
        },
      })
    }, container)

    return () => ctx.revert()
  }, [containerRef, selector, stagger, distance, start, reducedMotion])
}

/** Refreshes ScrollTrigger measurements — call after layout-affecting async work (fonts, images). */
export function refreshScrollTrigger() {
  ScrollTrigger.refresh()
}

interface MountRevealOptions {
  selector?: string
  stagger?: number
  distance?: number
  delay?: number
}

/**
 * Same fade + rise as `useScrollReveal`, but time-triggered on mount rather
 * than scroll position — for above-the-fold content (like the hero) that is
 * already in the viewport when the page loads, timed to land as the curtain
 * finishes parting.
 */
export function useMountReveal(
  containerRef: RefObject<HTMLElement | null>,
  { selector = '[data-reveal]', stagger = 0.12, distance = 30, delay = 1.9 }: MountRevealOptions = {},
) {
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector)
      if (targets.length === 0) return

      if (reducedMotion) {
        gsap.set(targets, { opacity: 1, y: 0, clearProps: 'transform' })
        return
      }

      gsap.set(targets, { opacity: 0, y: distance })
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: EASE_SOFT,
        stagger,
        delay,
      })
    }, container)

    return () => ctx.revert()
  }, [containerRef, selector, stagger, distance, delay, reducedMotion])
}
