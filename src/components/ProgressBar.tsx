import { useEffect, useRef } from 'react';

export default function ProgressBar() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (barRef.current) barRef.current.style.width = pct + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div
      ref={barRef}
      className="progress-bar fixed top-0 left-0 h-[2px] z-30"
      style={{ width: '0%', background: 'linear-gradient(90deg, var(--star-cyan), var(--nebula-magenta))' }}
    />
  );
}
