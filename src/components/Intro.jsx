import useSectionFade from '../hooks/useSectionFade';

export default function Intro({ t }) {
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
      </div>
    </section>
  );
}
