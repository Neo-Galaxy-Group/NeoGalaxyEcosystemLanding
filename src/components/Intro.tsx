import useSectionFade from '../hooks/useSectionFade';

interface IntroProps {
  t: (key: string) => string;
}

export default function Intro({ t }: IntroProps) {
  const fadeRef = useSectionFade(0.25);

  return (
    <section
      ref={fadeRef}
      className="section-fade intro relative min-h-screen flex flex-col items-center justify-center py-[120px] px-6 text-left"
      id="intro"
    >
      <div className="max-w-[720px] w-full mx-auto pr-[100px] max-[900px]:pr-0">
        <h2
          className="font-[var(--font-display)] font-semibold text-[clamp(1.6rem,3.4vw,2.3rem)] leading-[1.35] text-[var(--text)]"
          dangerouslySetInnerHTML={{ __html: t('intro.title') }}
        />
        <a href="#community" className="scroll-cue font-[var(--font-mono)] text-[12px] tracking-[0.1em] text-[var(--muted)] inline-flex items-center gap-[10px] no-underline border border-[var(--muted-2)] rounded-full " style={{ padding: '12px 20px', lineHeight: '1.5', marginTop: '2rem' }}>
          {t('intro.scrollCue')} <span className="arrow">↓</span>
        </a>
      </div>
    </section>
  );
}
