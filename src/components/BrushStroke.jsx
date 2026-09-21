/** Trazo de pincel tipo grafiti — estética de las capas del local. */
export default function BrushStroke({ className = "", opacity = 0.12 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 110C80 40 160 160 240 90C300 40 340 150 420 100C500 50 560 140 640 85C700 45 760 120 790 95"
        stroke={`rgba(255,255,255,${opacity})`}
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 140C120 70 190 170 280 115C360 65 410 155 500 120C580 90 650 155 740 125"
        stroke={`rgba(255,255,255,${opacity * 0.7})`}
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  )
}
