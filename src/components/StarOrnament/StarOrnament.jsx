import './StarOrnament.css';

function StarOrnament({ size = 16, className = '', animate = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      className={`star-ornament ${animate ? 'star-ornament--animate' : ''} ${className}`}
      aria-hidden="true"
    >
      <path d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z" />
    </svg>
  );
}

export default StarOrnament;