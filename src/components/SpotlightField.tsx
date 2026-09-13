interface SpotlightFieldProps {
  variant?: 'stage' | 'ink'
  className?: string
}

/**
 * Ambient, slowly-swaying stage-light glows used as section backdrops.
 * Pure CSS animation — automatically stilled by the reduced-motion media
 * query in index.css.
 */
export default function SpotlightField({
  variant = 'stage',
  className = '',
}: SpotlightFieldProps) {
  const glow =
    variant === 'stage'
      ? 'rgba(122, 20, 32, 0.35)'
      : 'rgba(245, 197, 24, 0.16)'
  const glow2 =
    variant === 'stage' ? 'rgba(20, 14, 10, 0.12)' : 'rgba(245, 197, 24, 0.08)'

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="animate-spotlight-sway absolute -top-1/4 left-1/4 h-[60vw] w-[60vw] max-h-[700px] max-w-[700px] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${glow}, transparent 70%)` }}
      />
      <div
        className="animate-spotlight-sway absolute -bottom-1/4 right-1/4 h-[50vw] w-[50vw] max-h-[600px] max-w-[600px] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${glow2}, transparent 70%)`,
          animationDelay: '-4s',
          animationDirection: 'reverse',
        }}
      />
    </div>
  )
}
