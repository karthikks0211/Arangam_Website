import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Shared motion tokens so every section eases and times the same way.
export const EASE_STAGE = 'cubic-bezier(0.77, 0, 0.18, 1)'
export const EASE_SOFT = 'power3.out'

export { gsap, ScrollTrigger }
