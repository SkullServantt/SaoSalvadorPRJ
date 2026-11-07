import React, { useContext, useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUp, Menu, X, Instagram, MapPin, Clock3, Phone, ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react';

const A = '/assets/';
const phone = '5527999586735';
const LocaleContext = React.createContext(null);
const translations = {
  pt: {
    home: 'Início', project: 'Projeto', about: 'Sobre', join: 'Junte-se', navLabel: 'Navegação principal', menuOpen: 'Abrir menu', menuClose: 'Fechar menu', switchLanguage: 'Mudar para inglês', enableDarkMode: 'Ativar modo noturno', enableLightMode: 'Ativar modo claro', navCta: 'Venha treinar', brandSubtitle: 'Capoeira e Cultura',
    heroTitle: 'Tradição que', heroTitleAccent: 'se move junto.', heroIntro: 'Capoeira, cultura e comunidade em movimento. Há mais de quatro décadas, a Associação São Salvador mantém viva a capoeira e compartilha seus valores por meio do ensino, da convivência e da cultura.', heroCta: 'Conheça o projeto', heroFounded: 'Fundada pelo Mestre Zé Branco em 1981', heroLogoAlt: 'Logo da Associação São Salvador de Capoeira e Cultura', since: 'Desde 1981', heroLocation: 'Morada da Barra · Cariacica, ES',
    galleryLabel: 'Nossa história em imagens', galleryTitle: 'Galeria do', galleryTitleAccent: 'Projeto', galleryIntro: 'Encontros, rodas e aprendizados que fazem a capoeira acontecer todos os dias.', galleryAltAction: 'Ampliar imagem', lightboxLabel: 'Imagem ampliada', closeImage: 'Fechar imagem ampliada', previousImage: 'Imagem anterior', nextImage: 'Próxima imagem', galleryFoot: 'Uma tradição construída coletivamente.', galleryLearn: 'Saiba mais sobre nós',
    aboutLabel: 'Raízes que seguem vivas', aboutTitle: 'Mais que movimento.', aboutTitleAccent: 'Um jeito de estar junto.', aboutParagraph1: 'A Associação São Salvador de Capoeira e Cultura é um espaço de aprendizado, troca e valorização da capoeira. Fundada pelo Mestre Zé Branco em 1981, a associação reúne pessoas de diferentes idades em torno de uma prática que combina movimento, música, história e convivência.', aboutParagraph2: 'Nas aulas e atividades, cada pessoa pode desenvolver habilidades físicas, conhecer os fundamentos da capoeira e participar de uma tradição cultural construída coletivamente. Mais do que aprender movimentos, é uma oportunidade de fortalecer vínculos, respeitar diferentes trajetórias e manter viva uma expressão importante da cultura brasileira.', aboutCta: 'Faça parte dessa roda', carouselLabel: 'Fotos da Associação São Salvador', showPhoto: 'Mostrar foto',
    mapTitle: 'Mapa aproximado do Alto Boa Vista, Cariacica', mapLocation: 'Alto Boa Vista', mapRegion: 'Cariacica · ES', approximate: 'LOCALIZAÇÃO APROXIMADA', openMaps: 'Abrir no Google Maps', mapAria: 'Abrir a localização aproximada de Alto Boa Vista, Cariacica, no Google Maps',
    joinLabel: 'Sua roda começa aqui', joinTitle: 'Junte-se', joinTitleAccent: 'a nós.', joinIntro: 'Chegue como você é. Tem espaço na roda para quem quer aprender, compartilhar e viver a capoeira.', whatsappCta: 'Fale com a gente no WhatsApp', whatsappMessage: 'Olá! Gostaria de saber mais sobre os treinos de capoeira.', weekdays: 'Segundas e quartas', atTime: 'Às 19h30', nucleus: 'Morada da Barra', joinLocation: 'Alto Boa Vista, Cariacica–ES',
    footerTagline: 'Uma tradição viva.', footerTagline2: 'Uma comunidade em movimento.', socialAria: 'Instagram', contact: 'Fale com a gente', footerLine: 'Feito de corpo, ritmo e comunidade.', backTop: 'Voltar ao topo', marqueeInvite: 'Venha treinar conosco', loading: 'Carregando Associação São Salvador', loadingTagline: 'Capoeira · Cultura · Comunidade', pageTitle: 'Associação São Salvador · Capoeira e Cultura', metaDescription: 'Capoeira, cultura e comunidade em movimento. Associação São Salvador de Capoeira e Cultura, em Morada da Barra, Cariacica–ES.'
  },
  en: {
    home: 'Home', project: 'Project', about: 'About', join: 'Join us', navLabel: 'Main navigation', menuOpen: 'Open menu', menuClose: 'Close menu', switchLanguage: 'Mudar para português', enableDarkMode: 'Enable dark mode', enableLightMode: 'Enable light mode', navCta: 'Come train with us', brandSubtitle: 'Capoeira & Culture',
    heroTitle: 'Tradition in', heroTitleAccent: 'motion, together.', heroIntro: 'Capoeira, culture, and community in motion. For more than four decades, Associação São Salvador has kept capoeira alive and shared its values through teaching, fellowship, and culture.', heroCta: 'Explore the project', heroFounded: 'Founded by Mestre Zé Branco in 1981', heroLogoAlt: 'Associação São Salvador de Capoeira e Cultura logo', since: 'Since 1981', heroLocation: 'Morada da Barra · Cariacica, ES',
    galleryLabel: 'Our story in pictures', galleryTitle: 'Project', galleryTitleAccent: 'Gallery', galleryIntro: 'Gatherings, rodas, and lessons that bring capoeira to life every day.', galleryAltAction: 'Enlarge image', lightboxLabel: 'Enlarged image', closeImage: 'Close enlarged image', previousImage: 'Previous image', nextImage: 'Next image', galleryFoot: 'A tradition built together.', galleryLearn: 'Learn more about us',
    aboutLabel: 'Living roots', aboutTitle: 'More than movement.', aboutTitleAccent: 'A way to be together.', aboutParagraph1: 'Associação São Salvador de Capoeira e Cultura is a place for learning, sharing, and celebrating capoeira. Founded by Mestre Zé Branco in 1981, the association brings people of different ages together through a practice that combines movement, music, history, and community.', aboutParagraph2: 'In classes and activities, everyone can develop physical skills, learn the foundations of capoeira, and take part in a cultural tradition built together. More than learning movements, it is an opportunity to strengthen bonds, respect different paths, and keep an important expression of Brazilian culture alive.', aboutCta: 'Join the roda', carouselLabel: 'Photos of Associação São Salvador', showPhoto: 'Show photo',
    mapTitle: 'Approximate map of Alto Boa Vista, Cariacica', mapLocation: 'Alto Boa Vista', mapRegion: 'Cariacica · ES', approximate: 'APPROXIMATE LOCATION', openMaps: 'Open in Google Maps', mapAria: 'Open the approximate location of Alto Boa Vista, Cariacica, in Google Maps',
    joinLabel: 'Your roda starts here', joinTitle: 'Join', joinTitleAccent: 'us.', joinIntro: 'Come as you are. There is room in the roda for anyone who wants to learn, share, and experience capoeira.', whatsappCta: 'Message us on WhatsApp', whatsappMessage: 'Hello! I would like to learn more about the capoeira classes.', weekdays: 'Mondays and Wednesdays', atTime: 'At 7:30 PM', nucleus: 'Morada da Barra', joinLocation: 'Alto Boa Vista, Cariacica–ES',
    footerTagline: 'A living tradition.', footerTagline2: 'A community in motion.', socialAria: 'Instagram', contact: 'Get in touch', footerLine: 'Made of movement, rhythm, and community.', backTop: 'Back to top', marqueeInvite: 'Come train with us', loading: 'Loading Associação São Salvador', loadingTagline: 'Capoeira · Culture · Community', pageTitle: 'Associação São Salvador · Capoeira & Culture', metaDescription: 'Capoeira, culture, and community in motion. Associação São Salvador de Capoeira e Cultura in Morada da Barra, Cariacica, Espírito Santo, Brazil.'
  }
};
function useCopy() { const { language } = useContext(LocaleContext); return (key) => translations[language][key] ?? key; }
function LanguageFlag({ language }) {
  if (language === 'pt') return <svg className="language-flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" fill="#fff"/><path fill="#b22234" d="M0 0h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24V16H0z"/><path fill="#3c3b6e" d="M0 0h10.4v8.62H0z"/><g fill="#fff"><circle cx="2" cy="2" r=".48"/><circle cx="5" cy="2" r=".48"/><circle cx="8" cy="2" r=".48"/><circle cx="3.5" cy="4.2" r=".48"/><circle cx="6.5" cy="4.2" r=".48"/><circle cx="2" cy="6.4" r=".48"/><circle cx="5" cy="6.4" r=".48"/><circle cx="8" cy="6.4" r=".48"/></g></svg>;
  return <svg className="language-flag" viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" fill="#009b3a"/><path fill="#ffdf00" d="M12 2 22 8 12 14 2 8z"/><circle cx="12" cy="8" r="3.7" fill="#002776"/><path d="M8.8 7.6c2.4-.5 4.7-.2 6.5.8" fill="none" stroke="#fff" stroke-width=".55"/></svg>;
}
const photos = [
  ['igexport-DVyoxSLjqYL.webp', 'Roda de capoeira no espaço da associação', 'portrait'],
  ['igexport-DW6UpGBDrk1-5.webp', 'Movimento de capoeira na roda', 'landscape'],
  ['igexport-DfVEPNhFs1i-2.webp', 'Encontro de capoeira com a comunidade', 'landscape'],
  ['igexport-DW6UpGBDrk1-10.webp', 'Aula coletiva de capoeira', 'landscape'],
  ['igexport-DVkKRWFDVMF.webp', 'Grupo reunido após a prática', 'landscape'],
  ['igexport-DfVEPNhFs1i-7.webp', 'Participante durante a atividade', 'portrait'],
  ['igexport-DW6UpGBDrk1-8.webp', 'Cordas da associação', 'landscape'],
  ['igexport-DfVEPNhFs1i-6.webp', 'Prática de capoeira em grupo', 'landscape'],
  ['igexport-DW6UpGBDrk1-4.webp', 'Alunos acompanham a roda de capoeira', 'landscape'],
];
const photoAltEn = [
  'Capoeira roda at the association', 'Capoeira movement in the roda', 'Capoeira gathering with the community', 'Group capoeira class', 'Group gathered after practice', 'Participant during an activity', 'Association cords', 'Group capoeira practice', 'Students watch the capoeira roda'
];
const socials = [
  ['harrison_hdm', 'https://www.instagram.com/harrison_hdm?xtok=OXd6eWMycmxidnpr'],
  ['saosalvadormoradadabarra', 'https://www.instagram.com/saosalvadormoradadabarra?cplk=dG44NHd1b2w5aW9w'],
  ['associacao_sao_salvador', 'https://www.instagram.com/associacao_sao_salvador/'],
];

function Header() {
  const [open, setOpen] = useState(false);
  const t = useCopy();
  const { language, setLanguage, theme, setTheme } = useContext(LocaleContext);
  const links = [[t('home'), '#inicio'], [t('project'), '#projeto'], [t('about'), '#sobre'], [t('join'), '#junte-se']];
  return <header className="header"><a className="brand" href="#inicio" aria-label={`Associação São Salvador, ${t('home').toLowerCase()}`}><img src={`${A}ass.png`} alt="" /><span>São Salvador<span className="brand-sub">{t('brandSubtitle')}</span></span></a>
    <button className="menu-toggle" aria-label={open ? t('menuClose') : t('menuOpen')} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav open' : 'nav'} aria-label={t('navLabel')}>{links.map(([name, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{name}</a>)}<button className="language-toggle" type="button" onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')} aria-label={t('switchLanguage')}><LanguageFlag language={language}/>{language === 'pt' ? 'EN' : 'PT'}</button><button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? t('enableLightMode') : t('enableDarkMode')} title={theme === 'dark' ? t('enableLightMode') : t('enableDarkMode')}>{theme === 'dark' ? <Sun size={16}/> : <Moon size={16}/>}</button><a className="nav-cta" href="#junte-se" onClick={() => setOpen(false)}>{t('navCta')} <ArrowDownRight size={15} /></a></nav>
  </header>;
}

function Hero() {
  const t = useCopy();
  return <section className="hero section-wrap" id="inicio"><ParticleField/><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> {t('heroLocation')}</div><h1>{t('heroTitle')}<br /><em>{t('heroTitleAccent')}</em></h1><p>{t('heroIntro')}</p><a className="button button-dark" href="#projeto">{t('heroCta')} <ArrowRight size={17} /></a><div className="hero-note"><span className="note-line" /> {t('heroFounded')}</div></div>
    <div className="hero-visual logo-stage" role="img" aria-label={t('heroLogoAlt')}>
      <span className="logo-orbit orbit-one" aria-hidden="true"/><span className="logo-orbit orbit-two" aria-hidden="true"/><span className="logo-glow" aria-hidden="true"/>
      <img className="floating-logo" src={`${A}ass.png`} alt="" fetchPriority="high" />
      <div className="hero-caption hero-date"><span>{t('since')}</span></div>
    </div></section>;
}

function SectionLabel({ children }) { return <div className="section-label"><span className="section-label-dot" aria-hidden="true"/><span>{children}</span></div>; }
function ParticleField() { return <div className="particle-field" aria-hidden="true">{Array.from({ length: 36 }, (_, i) => <span className="particle" key={i} />)}</div>; }
function ProjectGallery() {
  const [active, setActive] = useState(null);
  const { language } = useContext(LocaleContext);
  const t = useCopy();
  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'ArrowRight') setActive((index) => (index + 1) % photos.length);
      if (event.key === 'ArrowLeft') setActive((index) => (index - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', onKeyDown); };
  }, [active]);
  return <section className="gallery-section section-wrap" id="projeto"><div className="section-heading"><div><SectionLabel number="01">{t('galleryLabel')}</SectionLabel><h2>{t('galleryTitle')} <em>{t('galleryTitleAccent')}</em></h2></div><p>{t('galleryIntro')}</p></div>
    <div className="gallery-grid">{photos.map(([src, ptAlt], i) => { const alt = language === 'en' ? photoAltEn[i] : ptAlt; return <figure className={`gallery-item gallery-item-${i + 1}`} key={src}><button className="gallery-trigger" type="button" onClick={() => setActive(i)} aria-label={`${t('galleryAltAction')}: ${alt}`}><img src={A + src} alt={alt} loading="lazy"/></button></figure>; })}</div>
    {active !== null && <div className="lightbox" role="presentation" onClick={() => setActive(null)}><div className="lightbox-dialog" role="dialog" aria-modal="true" aria-label={t('lightboxLabel')} onClick={(event) => event.stopPropagation()}><button className="lightbox-close" type="button" onClick={() => setActive(null)} aria-label={t('closeImage')}><X size={21}/></button><button className="lightbox-arrow lightbox-prev" type="button" onClick={() => setActive((active - 1 + photos.length) % photos.length)} aria-label={t('previousImage')}><ChevronLeft/></button><div className="lightbox-image-wrap"><img src={A + photos[active][0]} alt={language === 'en' ? photoAltEn[active] : photos[active][1]}/><span className="lightbox-spark spark-one"/><span className="lightbox-spark spark-two"/></div><button className="lightbox-arrow lightbox-next" type="button" onClick={() => setActive((active + 1) % photos.length)} aria-label={t('nextImage')}><ChevronRight/></button><p className="lightbox-caption">{language === 'en' ? photoAltEn[active] : photos[active][1]} <span>{String(active + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</span></p></div></div>}
    <div className="gallery-foot"><span>{t('galleryFoot')}</span><a href="#sobre">{t('galleryLearn')} <ArrowRight size={15}/></a></div>
  </section>;
}
const aboutSlides = [
  ['igexport-DfVEPNhFs1i-4.webp', 'Roda de capoeira com participantes de diferentes idades'],
  ['igexport-DVkKRWFDVMF-2.webp', 'Comunidade reunida em encontro da associação'],
  ['igexport-DW6UpGBDrk1-5.webp', 'Capoeiristas em movimento durante uma roda'],
  ['igexport-DfVEPNhFs1i-2.webp', 'Encontro de capoeira com a comunidade'],
];
const aboutSlideAltEn = ['Capoeira roda with participants of different ages', 'Community gathered at an association event', 'Capoeiristas in motion during a roda', 'Capoeira gathering with the community'];
function AboutCarousel() {
  const [index, setIndex] = useState(0);
  const { language } = useContext(LocaleContext);
  const t = useCopy();
  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % aboutSlides.length), 4800);
    return () => window.clearInterval(timer);
  }, []);
  return <div className="about-carousel" role="region" aria-roledescription={language === 'en' ? 'carousel' : 'carrossel'} aria-label={t('carouselLabel')}>
    <div className="about-carousel-slides">{aboutSlides.map(([src, ptAlt], slideIndex) => <img key={src} className={`about-carousel-slide${index === slideIndex ? ' is-active' : ''}`} src={A + src} alt={language === 'en' ? aboutSlideAltEn[slideIndex] : ptAlt} aria-hidden={index !== slideIndex} loading={slideIndex === 0 ? 'eager' : 'lazy'}/>)}</div>
    <div className="carousel-controls"><div className="carousel-dots">{aboutSlides.map((_, dotIndex) => <button type="button" key={dotIndex} className={index === dotIndex ? 'active' : ''} onClick={() => setIndex(dotIndex)} aria-label={`${t('showPhoto')} ${dotIndex + 1}`} aria-current={index === dotIndex ? 'true' : undefined}/>)}</div></div>
  </div>;
}
function AboutSection() {
 const t = useCopy();
 return <section className="about-section" id="sobre"><ParticleField/><div className="section-wrap about-layout"><div className="about-copy"><SectionLabel number="02">{t('aboutLabel')}</SectionLabel><h2>{t('aboutTitle')}<br/><em>{t('aboutTitleAccent')}</em></h2><p>{t('aboutParagraph1')}</p><p>{t('aboutParagraph2')}</p><a className="text-link" href="#junte-se">{t('aboutCta')} <ArrowRight size={17}/></a></div>
 <div className="about-art"><AboutCarousel/></div></div></section>;
}
function MapPanel() {
 const t = useCopy();
 const { language } = useContext(LocaleContext);
 const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
 const query = encodeURIComponent(language === 'en' ? 'Alto Boa Vista, Cariacica, Espírito Santo, Brazil' : 'Alto Boa Vista, Cariacica, Espírito Santo, Brasil');
 const src = key ? `https://www.google.com/maps/embed/v1/place?key=${key}&q=${query}` : '';
 return <div className="map-panel">{src ? <iframe title={t('mapTitle')} src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /> : <div className="map-fallback"><div className="map-lines"/><div className="map-pin"><MapPin size={24}/></div><span className="map-label">{t('mapLocation')}<br/><small>{t('mapRegion')}</small></span><span className="map-approx">{t('approximate')}</span></div>}<a className="map-click-target" href={`https://www.google.com/maps/search/?api=1&query=${query}`} target="_blank" rel="noreferrer" aria-label={t('mapAria')}/><span className="map-open">{t('openMaps')} <ArrowRight size={15}/></span></div>;
}
function JoinSection() {
 const t = useCopy();
 return <section className="join-section" id="junte-se"><div className="section-wrap join-layout"><div className="join-copy"><SectionLabel number="03">{t('joinLabel')}</SectionLabel><h2>{t('joinTitle')} <em>{t('joinTitleAccent')}</em></h2><p>{t('joinIntro')}</p><a className="button button-lime" href={`https://wa.me/${phone}?text=${encodeURIComponent(t('whatsappMessage'))}`} target="_blank" rel="noreferrer"><Phone size={16}/> {t('whatsappCta')} <ArrowRight size={16}/></a><span className="join-phone">27 99958-6735</span><div className="join-details"><div><Clock3 size={17}/><span><b>{t('weekdays')}</b><small>{t('atTime')}</small></span></div><div><MapPin size={17}/><span><b>{t('nucleus')}</b><small>{t('joinLocation')}</small></span></div></div></div><MapPanel/></div></section>;
}
function Footer() { const t = useCopy(); return <footer className="footer"><div className="footer-top section-wrap"><a href="#inicio" className="footer-brand"><img src={`${A}ass.png`} alt=""/><span>Associação São Salvador<small>{t('brandSubtitle')}</small></span></a><p>{t('footerTagline')}<br/>{t('footerTagline2')}</p><div className="socials">{socials.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={`${t('socialAria')} ${name}`}><Instagram size={16}/><span>{name}</span></a>)}</div><div className="footer-contact"><small>{t('contact')}</small><a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">27 99958-6735 <ArrowRight size={15}/></a></div></div><div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} Associação São Salvador de Capoeira e Cultura</span><span>{t('footerLine')}</span><a href="#inicio">{t('backTop')} <ArrowUp size={14}/></a></div></footer>; }
function ProjectMarquee() { const t = useCopy(); const group = <div className="marquee-group"><span>Associação São Salvador de Capoeira e Cultura</span><i aria-hidden="true"/><span>{t('marqueeInvite')}</span><i aria-hidden="true"/></div>; return <div className="project-marquee" role="region" aria-label={`Associação São Salvador de Capoeira e Cultura — ${t('marqueeInvite')}`}><div className="marquee-track">{group}<div className="marquee-copy" aria-hidden="true">{group}</div></div></div>; }
function LoadingScreen() { const t = useCopy(); return <div className="loading-screen" role="status" aria-label={t('loading')}><div className="loader-emblem"><svg className="loader-ring" viewBox="0 0 120 120" aria-hidden="true"><circle className="loader-track" cx="60" cy="60" r="48"/><circle className="loader-progress" cx="60" cy="60" r="48"/></svg><img src={`${A}ass.png`} alt={t('heroLogoAlt')}/></div><span className="loader-label">{t('loadingTagline')}</span></div>; }
export default function App() { const [loading, setLoading] = useState(true); const [language, setLanguage] = useState(() => window.localStorage.getItem('ass-site-language') === 'en' ? 'en' : 'pt'); const [theme, setTheme] = useState(() => window.localStorage.getItem('ass-site-theme') === 'dark' ? 'dark' : 'light'); useEffect(() => { document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR'; document.title = translations[language].pageTitle; const description = document.querySelector('meta[name="description"]'); if (description) description.content = translations[language].metaDescription; window.localStorage.setItem('ass-site-language', language); }, [language]); useEffect(() => { document.documentElement.dataset.theme = theme; window.localStorage.setItem('ass-site-theme', theme); }, [theme]); useEffect(() => { const timer = window.setTimeout(() => setLoading(false), 900); return () => window.clearTimeout(timer); }, []); return <LocaleContext.Provider value={{ language, setLanguage, theme, setTheme }}>{loading && <LoadingScreen/>}<Header/><main><Hero/><ProjectGallery/><AboutSection/><JoinSection/></main><ProjectMarquee/><Footer/></LocaleContext.Provider>; }

