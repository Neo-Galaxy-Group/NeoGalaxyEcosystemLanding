import { useEffect, useRef, useState } from 'react';

interface TrajectoryNode {
  target: string;
  key: string;
  color: string | null;
}

interface TrajectoryProps {
  t: (key: string) => string;
}

const nodes: TrajectoryNode[] = [
  { target: 'hero', key: 'start', color: null },
  { target: 'p1', key: 'roleplay', color: 'var(--p1)' },
  { target: 'p2', key: 'aetheria', color: 'var(--p2)' },
  { target: 'p3', key: 'social', color: 'var(--p3)' },
  { target: 'p4', key: 'eterial', color: 'var(--p4)' },
  { target: 'p5', key: 'event', color: 'var(--p5)' },
  { target: 'map', key: 'map', color: null },
];

export default function Trajectory({ t }: TrajectoryProps) {
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const sectionIds = ['hero', 'p1', 'p2', 'p3', 'p4', 'p5', 'map'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            nodesRef.current.forEach((n) => { if (n) n.classList.remove('active'); });
            const idx = nodes.findIndex((n) => n.target === id);
            if (idx >= 0 && nodesRef.current[idx]) nodesRef.current[idx]!.classList.add('active');
          }
        });
      },
      { threshold: 0.45 }
    );
    sectionIds.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });

    // Hide trajectory when footer is visible
    const footer = document.querySelector('footer');
    let footerObserver: IntersectionObserver | undefined;
    if (footer) {
      footerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setHidden(entry.isIntersecting);
          });
        },
        { threshold: 0.05 }
      );
      footerObserver.observe(footer);
    }

    return () => {
      observer.disconnect();
      if (footerObserver) footerObserver.disconnect();
    };
  }, []);

  function handleClick(target: string) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  return (
    <nav
      className="trajectory fixed right-8 top-[90px] h-[calc(100vh-90px)] w-[90px] z-20 flex flex-col items-center justify-center pointer-events-none max-[900px]:hidden"
      aria-hidden="true"
      style={{ opacity: hidden ? 0 : 1, transition: 'opacity 0.4s ease' }}
    >
      <div className="absolute left-1/2 top-[8%] bottom-[8%] w-px -translate-x-1/2" style={{ background: 'linear-gradient(to bottom, transparent, var(--muted-2) 10%, var(--muted-2) 90%, transparent)' }} />
      <div className="relative flex flex-col justify-between h-[84%]">
        {nodes.map((node, i) => (
          <div
            key={node.target}
            ref={(el) => { nodesRef.current[i] = el; }}
            className="t-node flex items-center gap-[10px] opacity-45 cursor-pointer"
            style={{ '--node-color': node.color || 'var(--star-cyan)', pointerEvents: 'auto' } as React.CSSProperties}
            data-target={node.target}
            onClick={() => handleClick(node.target)}
          >
            <span className="dot w-[7px] h-[7px] rounded-full bg-[var(--muted-2)] shrink-0" />
            <span className="label font-[var(--font-mono)] text-[10px] tracking-[0.06em] text-[var(--muted)] whitespace-nowrap">{t(`trajectory.${node.key}`)}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}
