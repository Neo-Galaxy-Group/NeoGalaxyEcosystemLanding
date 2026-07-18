export default function Footer({ t }) {
  return (
    <footer className="relative z-[2] font-[var(--font-mono)] text-[12px] tracking-[0.04em] text-[var(--muted-2)]" style={{ background: 'linear-gradient(to bottom, rgba(23,15,56,0.55), rgba(10,7,32,0.85) 40%, var(--void-2))', padding: '72px 32px 40px' }}>
      <div className="footer-grid" style={{ maxWidth: '1000px', margin: '0 auto 48px auto', display: 'flex', flexWrap: 'wrap', gap: '48px', justifyContent: 'space-between' }}>
        <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: '160px' }}>
          <h4 className="font-[var(--font-mono)] uppercase text-[var(--muted)]" style={{ fontSize: '11px', letterSpacing: '0.14em', marginBottom: '4px', fontWeight: '400', lineHeight: '1.5' }}>{t('footer.sections')}</h4>
          <a href="#hero" className="footer-col no-underline text-[var(--muted)] w-fit" style={{ fontSize: '12.5px', lineHeight: '1.5' }}>{t('nav.home')}</a>
          <a href="#p1" className="footer-col no-underline text-[var(--muted)] w-fit" style={{ fontSize: '12.5px', lineHeight: '1.5' }}>{t('nav.projects')}</a>
          <a href="#cta" className="footer-col no-underline text-[var(--muted)] w-fit" style={{ fontSize: '12.5px', lineHeight: '1.5' }}>{t('nav.join')}</a>
        </div>
        <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: '160px' }}>
          <h4 className="font-[var(--font-mono)] uppercase text-[var(--muted)]" style={{ fontSize: '11px', letterSpacing: '0.14em', marginBottom: '4px', fontWeight: '400', lineHeight: '1.5' }}>{t('footer.social')}</h4>
          <a href="#" target="_blank" rel="noopener" className="footer-col no-underline text-[var(--muted)] w-fit" style={{ fontSize: '12.5px', lineHeight: '1.5' }}>Discord</a>
          <a href="#" target="_blank" rel="noopener" className="footer-col no-underline text-[var(--muted)] w-fit" style={{ fontSize: '12.5px', lineHeight: '1.5' }}>Instagram</a>
          <a href="#" target="_blank" rel="noopener" className="footer-col no-underline text-[var(--muted)] w-fit" style={{ fontSize: '12.5px', lineHeight: '1.5' }}>TikTok</a>
          <a href="#" target="_blank" rel="noopener" className="footer-col no-underline text-[var(--muted)] w-fit" style={{ fontSize: '12.5px', lineHeight: '1.5' }}>YouTube</a>
        </div>
      </div>
      <div style={{ textAlign: 'center', paddingTop: '28px', borderTop: '1px solid var(--void-3)', maxWidth: '1000px', margin: '0 auto', fontSize: '10.5px', letterSpacing: '0.06em', lineHeight: '1.5' }}>
        {t('footer.copyright').replace('{year}', new Date().getFullYear())}
      </div>
    </footer>
  );
}
