import { type FormEvent, useState } from 'react'

const ENQUIRY_TYPES = [
  'General enquiry',
  'Book a performance slot',
  'Join an acting class',
  'Host a private event',
]

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // NOTE: no backend is wired up yet — plug in your form endpoint,
    // email service, or booking API here (e.g. fetch('/api/enquiries', ...)).
    setSubmitted(true)
    event.currentTarget.reset()
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-start gap-3 rounded-sm border-2 border-cream/30 bg-ink-soft p-8"
      >
        <span className="font-display text-2xl text-stage">Curtain call!</span>
        <p className="text-sm leading-relaxed text-cream-dim">
          Thanks for reaching out — we&rsquo;ve noted your enquiry and will
          get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-stage underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="enquiry-name" className="text-xs font-bold uppercase tracking-widest text-cream-dim">
            Name
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="rounded-sm border border-cream/25 bg-transparent px-4 py-3 text-cream placeholder:text-cream-dim/50 focus:border-stage"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="enquiry-email" className="text-xs font-bold uppercase tracking-widest text-cream-dim">
            Email
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-sm border border-cream/25 bg-transparent px-4 py-3 text-cream placeholder:text-cream-dim/50 focus:border-stage"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="enquiry-type" className="text-xs font-bold uppercase tracking-widest text-cream-dim">
          What&rsquo;s this about?
        </label>
        <select
          id="enquiry-type"
          name="enquiryType"
          defaultValue={ENQUIRY_TYPES[0]}
          className="rounded-sm border border-cream/25 bg-ink px-4 py-3 text-cream focus:border-stage"
        >
          {ENQUIRY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="enquiry-message" className="text-xs font-bold uppercase tracking-widest text-cream-dim">
          Message
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={4}
          required
          className="resize-none rounded-sm border border-cream/25 bg-transparent px-4 py-3 text-cream placeholder:text-cream-dim/50 focus:border-stage"
          placeholder="Tell us a little about what you have in mind..."
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-stage px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-cream"
      >
        Reserve your seat
        <span aria-hidden="true">→</span>
      </button>
    </form>
  )
}
