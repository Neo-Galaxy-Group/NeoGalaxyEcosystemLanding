import useSectionFade from '../hooks/useSectionFade';

interface GalaxyMapProps {
  t: (key: string) => string;
}

interface MapNode {
  id: string;
  href: string;
  cssVar: string;
  pos: string;
  key: string;
}

const mapNodes: MapNode[] = [
  { id: 'n1', href: '#community', cssVar: 'var(--p1)', pos: 'top-[12%] left-[15%]', key: 'n1' },
  { id: 'n2', href: '#ngsh', cssVar: 'var(--p2)', pos: 'top-[10%] left-[70%]', key: 'n2' },
  { id: 'n3', href: '#academy', cssVar: 'var(--p3)', pos: 'top-[78%] left-[42%]', key: 'n3' },
];

export default function GalaxyMap({ t }: GalaxyMapProps) {
  const fadeRef = useSectionFade(0.15);

  return (
    <section
      ref={fadeRef}
      className="section-fade relative min-h-screen flex flex-col items-center justify-center py-[120px] px-6 pb-[60px] text-center"
      id="map"
    >
      <div className="max-w-[900px] w-full mx-auto">
        <h2 className="font-[var(--font-display)] font-semibold text-[clamp(1.8rem,3.6vw,2.4rem)] mb-3">
          {t('map.title')}
        </h2>
        <p className="text-[var(--muted)] text-[1.02rem]">
          {t('map.subtitle')}
        </p>

        <div className="constellation relative w-full max-w-[760px] mx-auto aspect-[16/10]" style={{ marginTop: '80px' }}>
          <svg className="absolute inset-0 w-full h-full overflow-visible">
            <line x1="15%" y1="12%" x2="70%" y2="10%" />
            <line x1="70%" y1="10%" x2="42%" y2="78%" />
            <line x1="42%" y1="78%" x2="15%" y2="12%" />
          </svg>

          {mapNodes.map((node) => (
            <a
              key={node.id}
              href={node.href}
              className={`c-node absolute -translate-x-1/2 -translate-y-1/2 no-underline flex flex-col items-center gap-[10px] w-[140px] ${node.pos}`}
              style={{ '--pc': node.cssVar } as React.CSSProperties}
            >
              <span className="c-dot w-4 h-4 rounded-full" style={{ background: node.cssVar, boxShadow: `0 0 22px 2px ${node.cssVar}` }} />
              <span className="c-label font-[var(--font-mono)] text-[11px] tracking-[0.05em] text-[var(--muted)] text-center">
                {t(`map.nodes.${node.key}`)}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
