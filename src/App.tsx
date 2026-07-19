import { Helmet } from 'react-helmet-async';
import { useI18n } from './i18n/useI18n';
import './styles/animations.scss';

import Starfield from './components/Starfield';
import ProgressBar from './components/ProgressBar';
import Header from './components/Header';
import Trajectory from './components/Trajectory';
import Hero from './components/Hero';
import Intro from './components/Intro';
import PlanetSection from './components/PlanetSection';
import GalaxyMap from './components/GalaxyMap';
import Cta from './components/Cta';
import Footer from './components/Footer';

interface Planet {
  id: string;
  planetKey: string;
}

const planets: Planet[] = [
  { id: 'p1', planetKey: 'p1' },
  { id: 'p2', planetKey: 'p2' },
  { id: 'p3', planetKey: 'p3' },
  { id: 'p4', planetKey: 'p4' },
  { id: 'p5', planetKey: 'p5' },
];

export default function App() {
  const { t, locale } = useI18n();

  return (
    <>
      <Helmet>
        <html lang={locale} />
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://neogalaxy.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('meta.ogTitle')} />
        <meta property="og:description" content={t('meta.ogDescription')} />
        <meta property="og:image" content="/neogalaxy-logo.png" />
        <meta property="og:url" content="https://neogalaxy.it/" />
        <meta property="og:site_name" content="Neo Galaxy" />
        <meta property="og:locale" content={locale === 'it' ? 'it_IT' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.ogTitle')} />
        <meta name="twitter:description" content={t('meta.ogDescription')} />
        <meta name="twitter:image" content="/neogalaxy-logo.png" />
        <meta name="theme-color" content="#05040f" />
        <meta name="author" content="Neo Galaxy" />
        <meta name="keywords" content="Neo Galaxy, roleplay, Minecraft, Aetheria, community, gaming, ecosystem, Discord, Vaeloria, Event Room" />
      </Helmet>

      <Starfield />

      {/* Nebula layer */}
      <div className="fixed -inset-[10%] z-0 pointer-events-none blur-[60px] opacity-55 mix-blend-screen">
        <div className="nebula-blob b1" />
        <div className="nebula-blob b2" />
        <div className="nebula-blob b3" />
      </div>

      {/* Vignette */}
      <div className="fixed inset-0 z-[1] pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,7,13,0.75) 100%)' }} />

      <ProgressBar />
      <Header t={t} />
      <Trajectory t={t} />

      <main className="relative z-[2]">
        <Hero t={t} />
        <Intro t={t} />
        {planets.map((planet) => (
          <PlanetSection key={planet.id} id={planet.id} planetKey={planet.planetKey} t={t} />
        ))}
        <GalaxyMap t={t} />
        <Cta t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}
