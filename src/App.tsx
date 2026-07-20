import { Helmet } from 'react-helmet-async';
import { useI18n } from './i18n/useI18n';
import './styles/animations.scss';

import Header from './components/Header';

import Starfield from './components/Starfield';
import Start from './components/Start';
import Intro from './components/Intro';
import ProgressBar from './components/ProgressBar';
import Trajectory from './components/Trajectory';
import PlanetSection from './components/PlanetSection';
import GalaxyMap from './components/GalaxyMap';
import Footer from './components/Footer';

interface Planet {
  id: string;
  planetKey: string;
  planetColor: string;
  nextSectionId: string;
}

const planets: Planet[] = [
  { id: 'community', planetKey: 'community', planetColor: 'p1', nextSectionId: 'ngsh' },
  { id: 'ngsh', planetKey: 'ngsh', planetColor: 'p2', nextSectionId: 'academy' },
  { id: 'academy', planetKey: 'academy', planetColor: 'p3', nextSectionId: 'map' }
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
        <link rel="canonical" href="https://neogalaxy.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('meta.ogTitle')} />
        <meta property="og:description" content={t('meta.ogDescription')} />
        <meta property="og:image" content="assets/img/neogalaxy-logo.png" />
        <meta property="og:url" content="https://neogalaxy.net/" />
        <meta property="og:site_name" content="Neo Galaxy" />
        <meta property="og:locale" content={locale === 'it' ? 'it_IT' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.ogTitle')} />
        <meta name="twitter:description" content={t('meta.ogDescription')} />
        <meta name="twitter:image" content="assets/img/neogalaxy-logo.png" />
        <meta name="theme-color" content="#05040f" />
        <meta name="author" content="Neo Galaxy" />
        <meta name="keywords" content="Neo Galaxy, roleplay, Minecraft, Aetheria, community, gaming, ecosystem, Discord, Event Room" />
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
        <Start t={t} />
        <Intro t={t} />
        {planets.map((planet) => (
          <PlanetSection key={planet.id} id={planet.id} planetKey={planet.planetKey} planetColor={planet.planetColor} nextSectionId={planet.nextSectionId} t={t} />
        ))}
        <GalaxyMap t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}
