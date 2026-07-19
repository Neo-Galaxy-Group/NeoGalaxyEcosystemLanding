interface FooterProps {
  t: (key: string) => string;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="relative z-[2] font-[var(--font-mono)] text-[12px] tracking-[0.04em] text-[var(--muted-2)]" style={{ background: 'linear-gradient(to bottom, rgba(23,15,56,0.55), rgba(10,7,32,0.85) 40%, var(--void-2))', padding: '32px 32px 40px' }}>
      <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto', fontSize: '12px', letterSpacing: '0.06em', lineHeight: '1.5' }}>
        {t('footer.copyright').replace('{year}', String(new Date().getFullYear()))}
      </div>
    </footer>
  );
}
