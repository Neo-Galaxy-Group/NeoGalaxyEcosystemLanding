import useSectionFade from '../hooks/useSectionFade';

const mapNodes = [
  { id: 'n1', href: '#p1', cssVar: 'var(--p1)', pos: 'top-[12%] left-[8%]', key: 'n1' },
  { id: 'n2', href: '#p2', cssVar: 'var(--p2)', pos: 'top-[6%] left-[45%]', key: 'n2' },
  { id: 'n3', href: '#p3', cssVar: 'var(--p3)', pos: 'top-[40%] left-[78%]', key: 'n3' },
  { id: 'n4', href: '#p4', cssVar: 'var(--p4)', pos: 'top-[78%] left-[55%]', key: 'n4' },
  { id: 'n5', href: '#p5', cssVar: 'var(--p5)', pos: 'top-[70%] left-[14%]', key: 'n5' },
];

export default function GalaxyMap({ t }) {
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
            <line x1="8%" y1="12%" x2="45%" y2="6%" />
            <line x1="45%" y1="6%" x2="78%" y2="40%" />
            <line x1="78%" y1="40%" x2="55%" y2="78%" />
            <line x1="55%" y1="78%" x2="14%" y2="70%" />
            <line x1="14%" y1="70%" x2="8%" y2="12%" />
          </svg>

          {mapNodes.map((node) => (
            <a
              key={node.id}
              href={node.href}
              className={`c-node absolute -translate-x-1/2 -translate-y-1/2 no-underline flex flex-col items-center gap-[10px] w-[140px] ${node.pos}`}
              style={{ '--pc': node.cssVar }}
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
