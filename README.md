# Arangam — Art from the Heart

A single-page site for Arangam, a 60-seat intimate performance and learning
space. Built with React 19, TanStack Router, Tailwind CSS v4, and GSAP +
ScrollTrigger for the curtain-opening intro and scroll reveals.

## Stack

- **Vite + React + TypeScript**
- **TanStack Router** — single root route rendering the page
- **Tailwind CSS v4** — all colors, type, shadows and motion defined as
  semantic design tokens in [src/index.css](src/index.css) via `@theme`
- **GSAP + ScrollTrigger** — curtain intro, scroll reveals, spotlight sway,
  and the stat count-up; every animated component respects
  `prefers-reduced-motion` (see [src/lib/useReducedMotion.ts](src/lib/useReducedMotion.ts))

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run lint      # oxlint
```

## Structure

```
src/
  components/   Curtain, Navbar, EnquiryForm, SeatsIllustration, SpotlightField, StatCounter
  sections/     Hero, About, Experiences, Visit, Footer
  pages/        HomePage — composes the sections into the single page
  lib/          gsap setup, reduced-motion hook, scroll/mount reveal hooks
  router.tsx    TanStack Router setup (single root route)
```

## Before launch

The address, phone, email and social links in the **Visit** and **Footer**
sections are sample placeholders (clearly labelled in the UI) — replace them
with Arangam's real details. The enquiry form is presentational only; wire
its `onSubmit` in [src/components/EnquiryForm.tsx](src/components/EnquiryForm.tsx)
to a real backend or form service before going live.
