export default function LinkArrow({ direction = 'right' }: { direction?: 'right' | 'up-right' | 'left' | 'down' }) {
  return <span className="link-arrow" aria-hidden="true">
    <svg style={{ transform: direction === 'left' ? 'rotate(180deg)' : direction === 'down' ? 'rotate(90deg)' : undefined }} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" focusable="false">
      {direction === 'up-right'
        ? <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
        : <path d="M2.5 8h11m-4-4 4 4-4 4" />}
    </svg>
  </span>
}
