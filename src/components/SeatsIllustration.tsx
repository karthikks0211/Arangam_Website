interface SeatsIllustrationProps {
  className?: string
  rows?: number
  seatsPerRow?: number
}

/**
 * A decorative row of theatre auditorium seats, drawn in CSS/SVG so no
 * external artwork is required. Purely decorative — hidden from screen readers.
 */
export default function SeatsIllustration({
  className = '',
  rows = 5,
  seatsPerRow = 11,
}: SeatsIllustrationProps) {
  const rowIndexes = Array.from({ length: rows }, (_, i) => i)
  const seatIndexes = Array.from({ length: seatsPerRow }, (_, i) => i)

  return (
    <div
      className={`flex flex-col items-center gap-[6%] ${className}`}
      aria-hidden="true"
    >
      {rowIndexes.map((row) => {
        const scale = 0.62 + (row / (rows - 1 || 1)) * 0.38
        return (
          <div
            key={row}
            className="flex justify-center gap-[3%]"
            style={{ transform: `scale(${scale.toFixed(2)})` }}
          >
            {seatIndexes.map((seat) => (
              <svg
                key={seat}
                viewBox="0 0 24 26"
                width="20"
                height="22"
                className="shrink-0"
              >
                <rect x="2" y="10" width="20" height="14" rx="3" fill="#7a1420" />
                <rect x="4" y="12" width="16" height="10" rx="2" fill="#a3202f" />
                <rect x="1" y="2" width="22" height="10" rx="3" fill="#140e0a" />
                <rect x="3" y="4" width="18" height="6" rx="2" fill="#2a1c14" />
              </svg>
            ))}
          </div>
        )
      })}
    </div>
  )
}
