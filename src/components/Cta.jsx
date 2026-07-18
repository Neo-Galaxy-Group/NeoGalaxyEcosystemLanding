import useSectionFade from '../hooks/useSectionFade';

export default function Cta({ t }) {
  const fadeRef = useSectionFade(0.25);

  return (
    <section
      ref={fadeRef}
      className="section-fade relative flex flex-col items-center justify-center py-[120px] px-6 text-center min-h-[60vh]"
      id="cta"
    >
      <div className="max-w-[720px] w-full mx-auto text-center flex flex-col items-center">
        <h2 className="font-[var(--font-display)] font-bold text-[clamp(2rem,4.5vw,3rem)] mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-[var(--muted)] max-w-[480px] leading-[1.6]">
          {t('cta.descriptionLine1')}
        </p>
        <p className="text-[var(--muted)] max-w-[480px] leading-[1.6]">
          {t('cta.descriptionLine2')}
        </p>
        <div style={{ marginTop: '36px' }} />
        <a
          href="#"
          className="cta-button inline-block font-[var(--font-mono)] text-[13px] tracking-[0.08em] uppercase no-underline text-[var(--void)] rounded-full font-medium"
          style={{ background: 'linear-gradient(120deg, var(--star-cyan), var(--gold))', boxShadow: '0 0 40px -10px var(--star-cyan)', padding: '16px 36px', lineHeight: '1.5' }}
        >
          {t('cta.button')}
        </a>
      </div>
    </section>
  );
}
