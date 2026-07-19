interface HeaderProps {
  t: (key: string) => string;
}

export default function Header({ t }: HeaderProps) {
  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 flex items-center justify-center backdrop-blur-[6px]" style={{ background: 'linear-gradient(to bottom, rgba(5,4,15,0.7), transparent)', padding: '22px 32px' }}>
      <nav className="flex" style={{ gap: '36px' }}>
        <a href="#start" className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] uppercase text-[var(--muted)] no-underline relative hover:text-[var(--text)] max-[600px]:text-[10px]" style={{ lineHeight: '1.5' }}>{t('nav.home')}</a>
        <a href="#map" className="font-[var(--font-mono)] text-[12px] tracking-[0.1em] uppercase text-[var(--muted)] no-underline relative hover:text-[var(--text)] max-[600px]:text-[10px]" style={{ lineHeight: '1.5' }}>{t('nav.projects')}</a>
      </nav>
    </header>
  );
}
