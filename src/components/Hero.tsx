import useSectionFade from '../hooks/useSectionFade';

interface HeroProps {
  t: (key: string) => string;
}

export default function Hero({ t }: HeroProps) {
  const titleParts = t('hero.title').split('\n');
  const fadeRef = useSectionFade(0.2);

  return (
    <section
      ref={fadeRef}
      className="section-fade relative min-h-screen flex flex-col items-center justify-center py-[120px] px-6 text-left"
      id="hero"
    >
      <div className="max-w-[720px] w-full mx-auto pr-[100px] max-[900px]:pr-0">
        <img src="/neogalaxy-logo.png" alt="Neo Galaxy" className="hero-logo-img w-[min(260px,42vw)] h-auto block mb-10" />
        <h1 className="font-[var(--font-display)] font-bold leading-[1.08] tracking-[-0.01em] bg-clip-text text-transparent" style={{ background: 'linear-gradient(180deg, #ffffff 0%, var(--text) 55%, var(--muted) 130%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', marginBottom: '28px' }}>
          {titleParts.map((part, i) => (
            <span key={i}>{part}{i < titleParts.length - 1 && <br />}</span>
          ))}
        </h1>
        <p className="text-[1.15rem] leading-[1.6] text-[var(--muted)] max-w-[520px]" style={{ marginBottom: '48px' }}>
          {t('hero.subtitle')}
        </p>
        <a href="#intro" className="scroll-cue font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--muted)] inline-flex items-center gap-[10px] no-underline border border-[var(--muted-2)] rounded-full" style={{ padding: '12px 20px', lineHeight: '1.5' }}>
          {t('hero.scrollCue')} <span className="arrow">↓</span>
        </a>
      </div>
    </section>
  );
}
