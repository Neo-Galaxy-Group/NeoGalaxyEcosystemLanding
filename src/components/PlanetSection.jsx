import { useState, useEffect, useRef } from 'react';
import DetailModal from './DetailModal';
import useSectionFade from '../hooks/useSectionFade';

export default function PlanetSection({ id, planetKey, t }) {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const fadeRef = useSectionFade(0.2);

  // Combine refs
  const combinedRef = (el) => {
    sectionRef.current = el;
    fadeRef.current = el;
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('in-view'); }); },
      { threshold: 0.45 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const planetColorMap = {
    p1: 'var(--p1)',
    p2: 'var(--p2)',
    p3: 'var(--p3)',
    p4: 'var(--p4)',
    p5: 'var(--p5)',
  };

  const planetIconMap = {
    p1: '/icons/icon-roleplay.png',
    p2: '/icons/icon-aetheria.png',
    p3: '/icons/icon-social.png',
    p4: '/icons/icon-eterial.png',
    p5: '/icons/icon-event.png',
  };

  return (
    <section
      ref={combinedRef}
      className="section-fade planet-section relative min-h-screen flex flex-col items-center justify-center py-[120px] px-6 text-left"
      id={id}
      style={{ '--pc': `var(--${planetKey})` }}
    >
      <div className="content max-w-[720px] w-full mx-auto pr-[100px] max-[900px]:pr-0">
        <div className="planet-visual w-[92px] h-[92px] rounded-full relative" style={{ background: 'radial-gradient(circle at 32% 28%, color-mix(in srgb, var(--pc) 90%, white 10%), var(--pc) 45%, color-mix(in srgb, var(--pc) 60%, black 55%) 100%)', boxShadow: '0 0 60px -8px var(--pc), inset -14px -10px 24px rgba(0,0,0,0.5)', marginBottom: '40px' }} />
        <div className="flex items-center gap-4" style={{ marginBottom: '20px' }}>
          <img
            src={planetIconMap[planetKey]}
            alt=""
            className="w-10 h-10 object-contain"
            style={{ filter: 'drop-shadow(0 0 8px var(--pc))' }}
          />
          <h3 className="font-[var(--font-display)] font-bold text-[clamp(2rem,4vw,2.8rem)] tracking-[-0.01em]">
            {t(`planets.${id}.title`)}
          </h3>
        </div>
        <p className="text-[1.08rem] leading-[1.65] text-[var(--muted)] max-w-[540px]">
          {t(`planets.${id}.description`)}
        </p>
        <button
          className="detail-toggle inline-flex items-center gap-2 bg-transparent cursor-pointer font-[var(--font-mono)] text-[12px] tracking-[0.08em] uppercase rounded-full text-[var(--pc)]"
          style={{ border: '1px solid color-mix(in srgb, var(--pc) 45%, transparent)', padding: '11px 20px', lineHeight: '1.5', marginTop: '28px' }}
          onClick={() => setModalOpen(true)}
        >
          {t(`planets.${id}.detailToggle`)} <span className="chev">→</span>
        </button>
      </div>

      <DetailModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={t(`planets.${id}.title`)}
        planetColor={planetColorMap[planetKey] || 'var(--star-cyan)'}
      >
        <p>{t(`planets.${id}.detail`)}</p>
      </DetailModal>
    </section>
  );
}
