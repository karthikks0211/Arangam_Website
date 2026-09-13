import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/lib/useReducedMotion'

interface StatCounterProps {
  value: number
  suffix?: string
  label: string
}

export default function StatCounter({ value, suffix = '', label }: StatCounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const el = numberRef.current
    if (!el) return

    if (reducedMotion) {
      el.textContent = `${value}${suffix}`
      return
    }

    const counter = { current: 0 }
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        current: value,
        duration: 1.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${Math.round(counter.current)}${suffix}`
        },
      })
    }, el)

    return () => ctx.revert()
  }, [value, suffix, reducedMotion])

  return (
    <div className="text-center sm:text-left">
      <span ref={numberRef} className="font-display text-4xl text-stage sm:text-5xl">
        0{suffix}
      </span>
      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-cream-dim">
        {label}
      </p>
    </div>
  )
}
